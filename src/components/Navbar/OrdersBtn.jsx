"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import IndCard from './IndCard';
const OrdersBtn = () => {
    const [showindividual,Setshowindividual]=useState(true);
    const [IndData,SetIndData]=useState([])
    const [OrgData,SetOrgData]=useState([]);


    const findindividual = async()=>{
        Setshowindividual(true)
        try {
            const {data} = await axios.get("/api/getindorder");
            SetIndData(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error)
        }
    }
    const findorganization = async()=>{
        Setshowindividual(false)
        try {
            const {data} = await axios.get("/api/getorgorder");
            SetOrgData(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
     findindividual()
    }, [])
    
  return (
    <>
        <div className='flex justify-center items-center gap-[2rem]  mt-[3rem] ' >
            <button onClick={findindividual} className=' py-[0.5rem] px-[1rem] bg-red-600 text-white rounded-[10px] hover:scale-[1.02] transition-all ' >Individual</button>
            <button onClick={findorganization} className=' py-[0.5rem] px-[1rem] bg-red-600 text-white rounded-[10px] hover:scale-[1.02] transition-all ' >Organization</button>
        </div>
        {
            showindividual ?
            <div className='w-full pt-[2rem] flex flex-wrap justify-around gap-y-[3rem] pb-[5rem] ' >
                {
                    IndData.map((i,index)=>{
                        return(
                            <IndCard key={index} images={i.image} order={i.order} paymentid={i.paymentid} price={i.price} user={i.user} id={i._id}      />
                        )
                    })
                }
            </div>
            :
            <div className='w-full pt-[2rem] flex flex-wrap justify-around ' >
                {
                    OrgData.map((i,index)=>{
                        return(
                            <IndCard key={index} images={i.image} order={i.order} paymentid={i.paymentid} price={i.price} user={i.user} id={i._id}      />
                        )
                    })
                }
            </div>
        }
    </>
  )
}

export default OrdersBtn