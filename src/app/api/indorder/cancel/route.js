import { NextResponse } from "next/server";

export const POST = (req)=>{
    try {
        return (
            NextResponse.json({
                message:"sahi hai",
                succes: true
            })
        )
    } catch (error) {
        return (
            NextResponse.json({
                message:error,
                succes: fasle
            })
        )
    }
   
}