import { connectdb } from "@/DB";
import { NextResponse } from "next/server";
import OrgOrderModel from "@/Model/OrganizationModel";

export const POST = async(req) =>{
    try {
       await connectdb();
       const {id} = await req.json();
       const orgdata = await OrgOrderModel.findById(id);
        return(
            NextResponse.json({
                success : true,
                data:orgdata
            }, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                }
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