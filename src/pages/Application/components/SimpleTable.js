import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AddAccountDialog from '../../Accounts/components/settings/AddAccountDialog';
import AccountList from '../../Accounts/components/settings/AccountList';

const tableData = {
  align: 'left',
  header: [
    'Account',
    'Type',
    'Balance',
    'Currency',
    'Status',
    'Actions'
  ]
};
const buttons = [
  {class: 'btn-align-right', name: 'Add Account', clickFn: 'handleClickOpen', closeFn: 'handleClose' }
];

class SimpleTable extends Component {
  state = {
    lastId: 2,
    open: false,
    dialogTile: '',
    account: {},
    accounts: [
      {id: 1, name: 'Portofel A', type: 'cash', balance: 100, currency: 'RON', status: 'activ'},
      {id: 2, name: 'Card ING A', type: 'card', balance: 300, currency: 'RON', status: 'activ'}
    ],
  }

  handleClickOpen = (title, account) => {
    this.setState({ open: true, dialogTile: title, account});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleAddAcount = (data) => {
    const nextId = this.state.lastId + 1;
    const accounts = [...this.state.accounts];
    const newAccount = {
      id: nextId,
      name: data.account,
      type: data.type,
      balance: data.balance,
      currency: data.currency,
      status: 'activ'
    };
    accounts.push(newAccount);
    
    this.setState({
      ...this.state,
      accounts,
      open: false,
      lastId: nextId
    })

  }

  render() {
    const { accounts } = this.state;
    console.log('render', accounts);
    return (
      <Paper key='pacc' className="paper-table-div">
        <Table className="simple-table">
          <TableHead>
            <TableRow key='th0'>
              { tableData.header.map((header, id) => (
                <TableCell key={`h${id}`} className="simple-table-header" align={tableData.align}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <AccountList onOpenDialog={this.handleClickOpen} accounts={accounts}/>
        </Table>
        <div className="btns-div">
          {buttons.map((btn, id) => 
            <React.Fragment>
              <Button key={`btn${id}`} variant="contained" color="primary" className={btn.class}
                onClick={() => this[btn.clickFn](btn.name)}>
                {btn.name}
              </Button>
            </React.Fragment>
          )}    
        </div>
        <AddAccountDialog
          open={this.state.open}
          title={this.state.dialogTile}
          data={this.state.account}
          onSubmit={this.handleAddAcount}
          onClose={this.handleClose}
        />
      </Paper>
    );
  }
}

export default SimpleTable;
