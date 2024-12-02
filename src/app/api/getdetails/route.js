import VisraOrderModel from "@/Model/IndividualSchema";
import { NextResponse } from "next/server";
import { connectdb } from "@/DB";

export const POST = async(req)=>{
    try {
        const {id} = await req.json();
        await connectdb();
        const ordersdeatil = await VisraOrderModel.findById(id);
        return (
            NextResponse.json({
                success:true,
                data:ordersdeatil
            },{
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                }
            })
        )
    } catch (error) {
        return(
            NextResponse.json({
                success:false,
                error:error
            })
        )
    }
  
}