import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ActionsButtons from './ActionsButtons';

const tableData = {
  align: 'left',
  header: [
    'Account',
    'Type',
    'Balance',
    'Currency',
    'Status',
    'Actions'
  ],
  data: [
    {id: 1, name: 'Portofel A', type: 'cash', balance: 100, currency: 'RON', status: 'activ'},
    {id: 2, name: 'Card ING A', type: 'card', balance: 300, currency: 'RON', status: 'activ'}
  ]
};

class AccountList extends Component {
  state = { 
    account: {
      name: '1',
      type: '1',
      balance: '1',
      currency: '1'
    }
  }

  handleEdit = (row) =>{
    const account = {
      account: row.name,
      type: row.type,
      balance: row.balance,
      currency: row.currency
    }
    this.props.onOpenDialog('Edit Account', account);
  }

  handleDelete = (id) =>{
    console.log('delete', id);
  }

  handleDone = (id) =>{
    console.log('done', id);
  }

  render() { 
    return ( 
      <TableBody>
        { tableData.data.map((row, id) => (
          <TableRow key={`tr${row.id}`}>
            <TableCell align="right">
              {row.name}
            </TableCell>
            <TableCell  align="right">
              {row.type}
            </TableCell>
            <TableCell  align="right">
              {row.balance}
            </TableCell>
            <TableCell  align="right">
              {row.currency}
            </TableCell>
            <TableCell  align="right">
              {row.status}
            </TableCell>
            <TableCell  align="center">
              <ActionsButtons                 
                onEdit={() => this.handleEdit(row)}
                onDelete={() => this.handleDelete(row.id)}
                onDone={() => this.handleDone(row.id)}/> 
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}
 
export default AccountList;

