'use client'
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import React,{useEffect, useState} from 'react'

const page = ({params}) => {
    const [Data,SetData]=useState([]);
    const [isLoading,SetisLoading] = useState(true);
    const getdetails = async(orderid)=>{
        try {
            const {data} = await axios.post("/api/getdetails",{
                id:orderid
            });
            console.log(data.data);
            SetData(data.data);
            SetisLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
     getdetails(params.id);
    }, [])
    

  return (
   <>
   <Navbar/>
   {
    isLoading ? <div><h1>Loading....</h1></div> :
    <div className='w-full flex flex-wrap justify-around pt-[5rem]  ' >
        <div className='w-[40%]  ' >
            <div className='bg-gray-300 p-[1rem] rounded-md flex flex-col gap-[0.5rem] ' >
                    <h1 className='text-center bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem] ' >{Data.order.profile}</h1>
                <div className='flex justify-between px-[1.5rem]  bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  ' >
                    <h3>Classify :- {Data.order.classify}</h3>
                    <h3>Year :- {Data.order.year}</h3>
                </div>
                <div className='flex justify-between px-[1.5rem]  bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  '>
                    <h3>Tocken :- {Data.order.token ? <span>YES</span>:<span>NO</span>}</h3>
                    <h3>Assistance :- {Data.order.assistance ? <span>YES</span>:<span>NO</span>}</h3>
                 </div>
                    <h1 className=' bg-red-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  font-semibold ' >Payment ID :- {Data.paymentid}</h1>
                    <h1 className=' bg-red-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  font-semibold ' >Total Amout Paid :- ₹{Data.price.totalprice}</h1>
            </div>
        </div>
        <div className="w-[45%]" >
            <div className='bg-gray-500 text-[1.2rem] text-white px-[1rem] py-[0.5rem] flex flex-col gap-[0.5rem] rounded-md font-semibold ' >
                <h2>Customer Name :- {Data.user.name}</h2>
                <h2>Customer Phone :- <a href={`tel:+${Data.user.phone}`}>{Data.user.phone}</a></h2>
                <h2>Customer Email :- <a href={`mailto:+${Data.user.email}`}>{Data.user.email}</a></h2>
                <h2>Customer Address :- {Data.user.address}</h2>
                <a href={`https://wa.me/+91${Data.user.phone}`}>Chat with Customer</a>
            </div>
        </div>
    </div>
   }
   </>
  )
}

export default page