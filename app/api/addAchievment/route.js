import User from "../../(model)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req){
    try{
        const body = await req.json()
        const userData = body

        console.log("test")
        console.log(body.subject.subject)
        if(!userData?.email){
            return NextResponse.json({message: "Missing required fields"}, { status: 400 });            
        }

        const duplicate = await User.findOne({ email: userData.email })
        .lean()
        .exec();
        
        if (!duplicate) {
            await User.create({email: userData.email})
        }

        await User.findOneAndUpdate({ email: userData.email.toString() }, { completed: [ body.subject.subject, ...duplicate.completed] })
        console.log(duplicate.completed)
        // await User.create(userData)
        //await User.deleteOne({ email: userData.email.toString() })
        return NextResponse.json({message: "User updated" }, { status: 201 });


    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error", error}, { status: 500 });
    }
}