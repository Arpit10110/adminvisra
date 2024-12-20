import { NextResponse } from "next/server";
import VisraOrderModel from "@/Model/IndividualSchema";
import CancelOrders from "@/Model/CancelOrders";

export const POST = async(req)=>{
    try {

        const {id} =await req.json();

        const data = await VisraOrderModel.findById(id)
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
        console.log(imginfo);

        await CancelOrders.create({
            order:orderinfo,
            user:userinfo,
            price:priceinfo,
            paymentid:data.paymentid,
            image:imginfo
        })

        await VisraOrderModel.deleteOne({ _id: id });

        return (
            NextResponse.json({
                data:"Order Canceled successfully",
                succes: true,
            },{
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
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