import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from "next/link"
const OrgCard = ({sn,date,order, user, id}) => {
  const columns = [
    { id: 'sn', label: 'SN.', minWidth: 50 },
    { id: 'customer_name', label: 'Customer Name', minWidth: 50 },
    { id: 'customer_phone', label: 'Customer Phone', minWidth: 50 },
    { id: 'dsc', label: 'DSC', minWidth: 50 },
    { id: 'classify', label: 'Classify', minWidth: 50 },
    { id: 'year', label: 'Year', minWidth: 50 },
    { id: 'token', label: 'Token', minWidth: 50 },
    { id: 'ass', label: 'Assis', minWidth: 50 },
    { id: 'date', label: 'Date & Time', minWidth: 50 },
    { id: 'payment', label: 'Payment', minWidth: 50 },
    { id: 'view_more', label: 'View More', minWidth: 50 },
  ];


  const rows = [
    { 
      sn: sn,
      customer_name: user.name,
      customer_phone: user.phone ,
      dsc: order.profile,
      classify:order.classify,
      year:order.year,
      token:order.token ? "Yes" : "No" ,
      ass:order.assistance ? "Yes" : "No",
      date:date,
      payment: 'Done', 
     }
  ];

  return (
    <>
        <TableBody>
    {rows.map((row) => (
      <TableRow hover key={row.sn}>
        {columns.map((column) => (
          <TableCell key={`${row.sn}-${column.id}`}>
            {
              column.id == "view_more" ? 
              <Link className=' text-blue-500   '  href={`/orgdetail/${id}`} >click here</Link>:
              row[column.id]
            }
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
    </>
  )
}

export default OrgCard