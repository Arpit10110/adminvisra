import Link from 'next/link'
import React from 'react'

const OrgCard = ({images ,order, paymentid, price, user, id}) => {
  return (
    <>
      <div className='w-[30%] rounded-[0.5rem] bg-gray-300 p-[0.5rem] flex flex-col gap-[0.5rem] cursor-default ' >
        <div>
            <h1 className='text-center bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem] ' >{order.profile}</h1>
        </div>
        <div className='flex justify-between px-[1.5rem]  bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  ' >
            <h3>Classify :- {order.classify}</h3>
            <h3>Year :- {order.year}</h3>
        </div>
        <div className='flex justify-between px-[1.5rem]  bg-blue-600 p-[0.2rem] text-white rounded-md text-[1.1rem]  '>
            <h3>Tocken :- {order.token ? <span>YES</span>:<span>NO</span>}</h3>
            <h3>Assistance :- {order.assistance ? <span>YES</span>:<span>No</span>}</h3>
        </div>
        <div className='bg-gray-500 text-white px-[1rem] py-[0.5rem] flex flex-col gap-[0.5rem] rounded-md font-semibold ' >
            <div>
              <h3>Customer Name :- {user.name}</h3>
            </div>
            <div>
              <h3>Customer Phone no. :- {user.phone}</h3>
            </div>
            <div>
              <h3>Customer Email :- {user.email}</h3>
            </div>
          </div>
        <Link className='bg-red-600 text-center px-[1rem] py-[0.5rem] text-white font-semibold rounded-md hover:scale-[1.01] transition-all '  href={`/orgdetail/${id}`} >View More</Link>
      </div>
    </>
  )
}

export default OrgCard