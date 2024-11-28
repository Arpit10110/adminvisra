import { connectdb } from "@/DB";
import { NextResponse } from "next/server";
import VisraOrderModel from "@/Model/IndividualSchema";

export const GET = async(req) =>{
    try {
       await connectdb();
       const inddata = await VisraOrderModel.find({})
       return NextResponse.json({
        success: true,
        data: inddata,
    }, {
        headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate',
        }
    });
    } catch (error) {
        return(
            NextResponse.json({
                success : false,
                message: error
            })
        )
    }
    
} 