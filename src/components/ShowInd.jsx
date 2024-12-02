"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import IndCard from './IndCard';
import Loading from './Loading';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ShowInd = () => {
    const [IndData,SetIndData]=useState([])
    const [isLoading,SetisLoading]=useState(true)
    const columns = [
        { id: 'sn', label: 'SN.', minWidth: 70 },
        { id: 'dsc', label: 'DSC', minWidth: 150 },
        { id: 'payment', label: 'Payment', minWidth: 170 },
        { id: 'customer_name', label: 'Customer Name', minWidth: 200 },
        { id: 'customer_phone', label: 'Customer Phone', minWidth: 150 },
        { id: 'view_more', label: 'View More', minWidth: 100 },
      ];
    
    const findindividual = async()=>{
        try {
            const {data} = await axios.get("/api/getindorder");
            SetIndData(data.data);
            console.log(data.data);
            SetisLoading(false)
        } catch (error) {
            console.log(error)
            SetisLoading(false)
        }
    }

    useEffect(() => {
        findindividual()
       }, [])  
       
       
  return (
   <>
   {
    isLoading ? <Loading/>:
   <div className='w-full pt-[2rem] flex flex-wrap justify-around gap-y-[3rem] pb-[5rem] ' >
               <Paper sx={{ width: '95%', overflow: 'visible' }}>
               <TableContainer sx={{ maxHeight: 'none' }}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align || 'left'}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    {
                    IndData.map((i,index)=>{
                        return(
                            <IndCard key={index} sn={index+1} images={i.image} order={i.order} paymentid={i.paymentid} price={i.price} user={i.user} id={i._id}      />
                        )
                    })
                }
                    </Table>
               </TableContainer>
               </Paper>
    </div>
   }
   </>
  )
}

export default ShowInd