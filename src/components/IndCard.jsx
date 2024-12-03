import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from "next/link"
const IndCard = ({sn, images ,order ,paymentid, price,user,id}) => {
  const columns = [
    { id: 'sn', label: 'SN.', minWidth: 70 },
    { id: 'dsc', label: 'DSC', minWidth: 150 },
    { id: 'payment', label: 'Payment', minWidth: 170 },
    { id: 'customer_name', label: 'Customer Name', minWidth: 200 },
    { id: 'customer_phone', label: 'Customer Phone', minWidth: 150 },
    { id: 'view_more', label: 'View More', minWidth: 100 },
  ];

  const rows = [
    { sn: sn, dsc: order.profile, payment: 'Done', customer_name: user.name, customer_phone: user.phone },
  ];


  return (
    <TableBody>
    {rows.map((row) => (
      <TableRow hover key={row.sn}>
        {columns.map((column) => (
          <TableCell key={`${row.sn}-${column.id}`}>
            {
              column.id == "view_more" ? 
              <Link className=' text-blue-500   '  href={`/indetail/${id}`} >click here</Link>:
              row[column.id]
            }
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
  );
};

export default IndCard;
