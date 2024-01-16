import User from "../../(model)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req){
    try{
        const body = await req.json()
        const userData = body.formData

        if(!userData?.email || !userData.password){
            return NextResponse.json({message: "Missing required fields"}, { status: 400 });            
        }

        const duplicate = await User.findOne({ email: userData.email })
        .lean()
        .exec();
  
      if (duplicate) {
        return NextResponse.json({ message: "Email already in use" }, { status: 409 });
      }

        const hashPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashPassword;
        
        // await User.create(userData)
        await User.create({ name: userData.name, email: userData.email, password: userData.password, completed: [] })
        return NextResponse.json({message: "User Created" }, { status: 201 });


    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error", error}, { status: 500 });
    }
}