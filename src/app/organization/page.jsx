"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import OrgCard from '@/components/OrgCard';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import OrdersBtn from '@/components/OrdersBtn';
const page = () => {
    const [OrgData,SetOrgData]=useState([]);
    const [isLoading,SetisLoading]=useState(true)

    const findorganization = async()=>{
        try {
            const {data} = await axios.get("/api/getorgorder");
            SetOrgData(data.data);
            console.log(data.data);
            SetisLoading(false);
        } catch (error) {
            SetisLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        findorganization()
       }, [])  
       
  return (
    <>
    <Navbar/>
    <OrdersBtn />
    {
        isLoading ? <Loading/>:
        <div className='w-full pt-[2rem] flex flex-wrap justify-around ' >
        {
            OrgData.map((i,index)=>{
                return(
                    <OrgCard key={index} images={i.image} order={i.order} paymentid={i.paymentid} price={i.price} user={i.user} id={i._id}      />
                )
            })
        }
    </div>
    }
    </>
  )
}

export default page