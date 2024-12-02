import React from 'react'
import Link from 'next/link';
const OrdersBtn = () => {
  return (
    <>
        <div className='flex justify-center items-center gap-[2rem]  mt-[3rem] ' >
            <Link href={"/"} className=' py-[0.5rem] px-[1rem] bg-red-600 text-white rounded-[10px] hover:scale-[1.02] transition-all ' >Individual</Link>
            <Link href={"/organization"}  className=' py-[0.5rem] px-[1rem] bg-red-600 text-white rounded-[10px] hover:scale-[1.02] transition-all ' >Organization</Link>
        </div>
    </>
  )
}

export default OrdersBtn