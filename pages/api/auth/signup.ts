import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;

    const getUserWithEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (getUserWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "Email is already Registered" });
    }

    const showError: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, { min: 1, max: 20 }),
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, { min: 1, max: 20 }),
        errorMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMessage: "City is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is invalid",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        showError.push(check.errorMessage);
      }
    });

    if (showError.length) {
      return res.status(400).json({ errorMessage: showError[0] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        city: city,
        password: hashedPassword,
        phone: phone,
      },
    });

    const alg = "HS256";

    const secret =
      new TextEncoder().encode(process.env.JWT_SECRET) ||
      "LKNVGESHGVIUBSVKNDSKJCNBIU3ERY812Y43BFU";

    const token = await new jose.SignJWT({ email: newUser.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).json({
      firstName: newUser.first_name,
      lastName: newUser.last_name,
      email: newUser.email,
      city: newUser.city,
      phone: newUser.phone,
    });
  } else {
    return res.status(404).json({ errorMessage: "Unknown end-point" });
  }
}

// res.status(200).json({
//     success:true,
//     message:"User SignUp Successful",
//     user :{
//         firstName:user.first_name,
//         lastName:user.last_name,
//         email:user.email,
//         city:user.city,
//         phone:user.phone
//     }
// })
