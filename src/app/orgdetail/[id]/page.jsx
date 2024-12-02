'use client'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import React,{useEffect, useState} from 'react'

const page = ({params}) => {
    const [Data,SetData]=useState([]);
    const [isLoading,SetisLoading] = useState(true);
    const getdetails = async(orderid)=>{
        try {
            const {data} = await axios.post("/api/getorgdetails",{
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
    <div className='w-full flex flex-wrap justify-around pt-[5rem]  pb-[3rem]  ' >
        <div className='w-[40%] flex flex-col gap-[4rem]   ' >
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
            <div className='bg-gray-300 p-[1rem] rounded-md flex flex-col gap-[1rem] ' >
                <h1 className='text-[1.5rem] font-semibold ' >Order Status ?</h1>
                <button className='text-center  bg-red-600 text-white font-semibold px-[1rem] py-[0.5rem] rounded-md  '   >Cancel Order</button>
                <button className='text-center  bg-green-600 text-white font-semibold px-[1rem] py-[0.5rem] rounded-md  '   >Order Completed</button>
            </div>
        </div>
        <div className="w-[45%] flex flex-col gap-[3rem] " >
            <div className='bg-gray-100 text-[1.2rem]  px-[1rem] py-[0.5rem] flex flex-col gap-[1rem] rounded-md font-semibold ' >
                <h2>Customer Name :- {Data.user.name}</h2>
                <h2>Customer Phone :- <a href={`tel:+${Data.user.phone}`}>{Data.user.phone}</a></h2>
                <h2>Customer Email :- <a href={`mailto:+${Data.user.email}`}>{Data.user.email}</a></h2>
                <h2>Customer Address :- {Data.user.address}</h2>
                <div  className='w-full flex gap-[1rem] flex-col ' >
                <a   className='text-center  bg-red-600 text-white font-semibold px-[1rem] py-[0.5rem] rounded-md  '   href={`https://wa.me/+91${Data.user.phone}`}>Chat with Customer</a>
                <a   className='text-center  bg-green-600 text-white font-semibold px-[1rem] py-[0.5rem] rounded-md  '   href={`tel:+${Data.user.phone}`}>Call Customer</a>
                </div>
            </div>
            <div className='bg-gray-100 text-[1.2rem]  px-[1rem] py-[0.5rem] flex flex-col gap-[1rem] rounded-md font-semibold ' >
                <h1>Document Proof:-</h1>
                <div className='flex w-full justify-around' >
                    <div className='w-[25%] flex flex-col gap-[1rem] items-center bg-gray-300 p-[1rem] rounded-md ' >
                        <h3  className='text-blue-600 font-semibold text-[1.5rem] '>Adhar Card</h3>
                        {
                            Data.image.adhar == "NA" ? <h2  className=' cursor-default bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '>N/A</h2>:
                        <a className='bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '  href={`${Data.image.adhar}`}>View</a>
                        }
                    </div>
                    <div className='w-[25%] flex flex-col gap-[1rem] items-center bg-gray-300 p-[1rem] rounded-md ' >
                        <h3  className='text-blue-600 font-semibold text-[1.5rem] '>Pan Card</h3>
                        {
                            Data.image.pan == "NA" ? <h2  className=' cursor-default bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '>N/A</h2>:
                        <a className='bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '  href={`${Data.image.pan}`}>View</a>
                        }
                    </div>
                    <div className='w-[25%] flex flex-col gap-[1rem] items-center bg-gray-300 p-[1rem] rounded-md ' >
                        <h3  className='text-blue-600 font-semibold text-[1.5rem] '>Others</h3>
                        {
                            Data.image.other == "NA" ? <h2  className=' cursor-default bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '>N/A</h2>:
                        <a className='bg-red-600 rounded-md w-full text-center py-[0.3rem] text-white '  href="">View</a>
                        }
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 text-[1.2rem]  px-[1rem] py-[0.5rem] flex flex-col gap-[1rem] rounded-md font-semibold '>
                    <h1>Organization name :- {Data.oragdetail.orgname}</h1>
                    <h1>Department name :- {Data.oragdetail.departmentname}</h1>
                    <h1>Gst no. :- {Data.oragdetail.gstno}</h1>
                    <h1>Organization Type :- {Data.oragdetail.orgtype}</h1>
            </div>
        </div>
    </div>
   }
   </>
  )
}

export default page