import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from "next/link"
const IndCard = ({sn ,order ,paymentid, price,user,status,color}) => {
    const columns = [
        { id: 'sn', label: 'SN.', minWidth: 50 },
        { id: 'customer_name', label: 'Customer Name', minWidth: 50 },
        { id: 'customer_phone', label: 'Customer Phone', minWidth: 50 },
        { id: 'dsc', label: 'DSC', minWidth: 50 },
        { id: 'classify', label: 'Classify', minWidth: 50 },
        { id: 'year', label: 'Year', minWidth: 50 },
        { id: 'token', label: 'Token', minWidth: 50 },
        { id: 'ass', label: 'Assis', minWidth: 50 },
        { id: 'payment', label: 'Payment', minWidth: 50 },
        { id: 'status', label: 'Status', minWidth: 50 },
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
      payment: 'Done', 
      status:status,
     }
  ];


  return (
    <TableBody>
    {rows.map((row) => (
      <TableRow hover key={row.sn}>
        {columns.map((column) => (
          <TableCell key={`${row.sn}-${column.id}`}>
            {
              column.id == "status" ? 
              <h2 className={`font-semibold text-${color}-600`}>{row[column.id]}</h2>:
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
