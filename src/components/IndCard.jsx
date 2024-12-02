import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    { sn: sn, dsc: order.profile, payment: 'Done', customer_name: user.name, customer_phone: '9599056856' },
  ];





  return (
    <TableBody>
    {rows.map((row) => (
      <TableRow hover key={row.sn}>
        {columns.map((column) => (
          <TableCell key={`${row.sn}-${column.id}`}>
            {row[column.id]}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
  );
};

export default IndCard;
