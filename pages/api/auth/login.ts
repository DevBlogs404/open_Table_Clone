import { NextApiRequest,NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import * as jose from 'jose'

const prisma = new PrismaClient();


export default async function handler(req:NextApiRequest,res:NextApiResponse){

    if(req.method === "POST"){

    const { email,password}  = req.body;

    const showError: string[] = [];

    const userWithEmail = await prisma.user.findUnique({
        where:{
            email
        }
    })


  if(!userWithEmail){
    return res.status(401).json({
        errorMessage:"Email or Password is Invalid!!"
    })
  }

    const validationSchema = [
        {
            valid: validator.isEmail(email),
            errorMessage: "Email is invalid"
        },
        {
            valid: validator.isLength(password,{min:1}),
            errorMessage: "Password is invalid"
        }
    ]

    validationSchema.forEach((check)=>{
        if(!check.valid){
            showError.push(check.errorMessage)
        }
    })

    if(showError.length){
        return res.status(400).json({errorMessage:showError[0]})
    }

  const isMatch = await bcrypt.compare(password,userWithEmail.password)

  if(!isMatch){
    return res.status(401).json({
        errorMessage:"Email or Password is Invalid!!"
    })
  }

  const alg = "HS256"

  const secret = new TextEncoder().encode(process.env.JWT_SECRET) || "LKNVGESHGVIUBSVKNDSKJCNBIU3ERY812Y43BFU"

  const token = await new jose.SignJWT({email:userWithEmail.email}).setProtectedHeader({alg}).setExpirationTime("24h").sign(secret)


  return  res.status(200).json({
    success:true,
    message:"User Login Successful",
    token
})

 
}

return res.status(404).json({errorMessage:"Unknown end-point"})

}