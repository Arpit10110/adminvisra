import { NextResponse } from "next/server";
import OrgOrderModel from "@/Model/OrganizationModel";
import CompletedOrders from "@/Model/CompletedOrders";

export const POST = async(req)=>{
    try {

        const {id} =await req.json();

        const data = await OrgOrderModel.findById(id)
        const userinfo = {
            name:data.user.name, 
            phone:data.user.phone,
            email:data.user.email,
            address:data.user.address
        }
        const orderinfo = {
            profile:data.order.profile,
            classify:data.order.classify,
            year:data.order.year,
            token:data.order.token,
            assistance:data.order.assistance
        }
        const priceinfo = {
            dscprice:data.price.dscprice,
            assprice:data.price.assprice,
            tokenprice:data.price.tokenprice,
            gst:data.price.gst,
            totalprice:data.price.totalprice,
        }
        const imginfo = {
            adhar:data.image.adhar,
            pan:data.image.pan,
            other:data.image.other
        }
        await CompletedOrders.create({
            order:orderinfo,
            user:userinfo,
            price:priceinfo,
            paymentid:data.paymentid,
            image:imginfo
        })

        await OrgOrderModel.deleteOne({ _id: id });

        return (
            NextResponse.json({
                data:"Order completed successfully",
                succes: true,
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