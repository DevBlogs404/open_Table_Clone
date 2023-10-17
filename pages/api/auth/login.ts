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
    const { email, password } = req.body;

    const showError: string[] = [];

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errorMessage: "Email or Password is Invalid!!",
      });
    }

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
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

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        errorMessage: "Email or Password is Invalid!!",
      });
    }

    const alg = "HS256";

    const secret =
      new TextEncoder().encode(process.env.JWT_SECRET) ||
      "LKNVGESHGVIUBSVKNDSKJCNBIU3ERY812Y43BFU";

    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, {
      req,
      res,
      maxAge: 60 * 6 * 24,
    });

    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      city: user.city,
      phone: user.phone,
    });
  } else {
    return res.status(404).json({ errorMessage: "Unknown end-point" });
  }
}

// res.status(200).json({
//     success:true,
//     message:"User Login Successful",
//     user :{
//         firstName:user.first_name,
//         lastName:user.last_name,
//         email:user.email,
//         city:user.city,
//         phone:user.phone
//     }
// })
