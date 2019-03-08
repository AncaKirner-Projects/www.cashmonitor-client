import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AddAccountDialog from './AddAccountDialog';
import AccountList from './AccountList';
import { addAccount, editAccount } from '../../actions/accountActions';

// TODO: change dummy data with firebase
const tableHeaderData = {
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

class AccountsTable extends Component {
  state = {
    open: false,
    dialogTile: '',
    account: {}
  }

  handleClickOpen = (title, account) => {
    this.setState({ open: true, dialogTile: title, account});
  }

  /**
   * Will close the (Add account or Edit account) modal
   */
  handleClose = () => {
    this.setState({ open: false });
  }

  /**
   * Add or edit account will change the store data
   * @param {Object} data Input data came from form
   */
  handleAddAcount = (data) => {
    //create a new object with the data needed
    const newAccount = {
      name: data.account,
      type: data.type,
      balance: data.balance,
      currency: data.currency,
      status: 'activ',
      createdTime: new Date()
    };
    
    // for edit action the account will be saved in state to persist the form
    if (this.state.account) {
      this.props.editAccount(newAccount);
    } else {
      this.props.addAccount(newAccount);
    }
  }

  render() {
    return (
      <Paper key='pacc' className="paper-table-div">
        <Table className="simple-table">
          <TableHead>
            <TableRow key='th0'>
              { tableHeaderData.header.map((header) => (
                <TableCell key={uniqid()} 
                  className="simple-table-header" 
                  align={tableHeaderData.align}>{header}
              </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <AccountList onOpenDialog={this.handleClickOpen}/>
        </Table>
        <div className="btns-div">
          { // get the array buttons and put the list into the page
            buttons.map((btn) => 
            <Button key={uniqid()} variant="contained" color="primary" className={btn.class}
              onClick={() => this[btn.clickFn](btn.name)}>
              {btn.name}
            </Button>
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

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    addAccount,
    editAccount
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(AccountsTable);
