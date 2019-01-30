import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// import IconButton from '@material-ui/core/IconButton';
// import Edit from '@material-ui/icons/Edit';
// import Delete from '@material-ui/icons/DeleteForever';
// import Done from '@material-ui/icons/Done';
import AddAccountDialog from '../../Accounts/components/AddAccountDialog';
import ActionsButtons from '../../Accounts/components/ActionsButtons';
import AccountList from '../../Accounts/components/AccountList';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
    open: false,
    dialogTile: '',
    account: {}
  }

  handleClickOpen = (title, account) => {
    this.setState({ open: true, dialogTile: title, account});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleAddAcount = () => {
    console.log('add account');
  }

  render() {
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
          <AccountList onOpenDialog={this.handleClickOpen}/>
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
          onSubmit={this.handleSubmit}
          onClose={this.handleClose}
        />
      </Paper>
    );
  }
}

export default SimpleTable;
