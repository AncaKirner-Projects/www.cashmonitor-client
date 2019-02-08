import React, { Component } from 'react';
import uniqid from 'uniqid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ActionsButtons from './ActionsButtons';

const tableData = {
  align: 'left',
  data: [
    {id: 1, name: 'Portofel A', type: 'cash', balance: 100, currency: 'RON', status: 'activ'},
    {id: 2, name: 'Card ING A', type: 'card', balance: 300, currency: 'RON', status: 'activ'}
  ]
};

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: props.accounts
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.accounts !== this.state.accounts) {
      this.setState({ accounts: nextProps.accounts });
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
    const accounts = [...this.state.accounts];
    const newList = accounts.filter((elem) => id !== elem.id);

    this.setState({
      ...this.state,
      accounts: newList
    });
  }

  render() { 
    const { accounts } = this.state;

    return ( 
      <TableBody>
        { accounts.map((row, id) => (
          <TableRow key={uniqid()}>
            <TableCell key={uniqid()} align="right">
              {row.name}
            </TableCell>
            <TableCell key={uniqid()} align="right">
              {row.type}
            </TableCell>
            <TableCell key={uniqid()} align="right">
              {row.balance}
            </TableCell>
            <TableCell key={uniqid()} align="right">
              {row.currency}
            </TableCell>
            <TableCell key={uniqid()} align="right">
              {row.status}
            </TableCell>
            <TableCell key={uniqid()} align="center">
              <ActionsButtons key={uniqid()}              
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

