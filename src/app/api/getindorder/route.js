import { connectdb } from "@/DB";
import { NextResponse } from "next/server";
import VisraOrderModel from "@/Model/IndividualSchema";

export const GET = async(req) =>{
    try {
       await connectdb();
       const inddata = await VisraOrderModel.find({})
        return(
            NextResponse.json({
                success : true,
                data:inddata,
            })
        )
    } catch (error) {
        return(
            NextResponse.json({
                success : false,
                message: error
            })
        )
    }
    
} 