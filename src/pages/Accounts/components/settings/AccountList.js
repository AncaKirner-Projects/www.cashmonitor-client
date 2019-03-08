import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ActionsButtons from './ActionsButtons';
import { deleteAccount } from '../../actions/accountActions';

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
    this.props.deleteAccount(id);
  }

  render() {
    const { accounts } = this.props;

    return ( 
      <TableBody>
        { accounts && accounts.toJS().map((row, id) => (
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
 
const mapStateToProps = (state) => ({
  accounts: state.accounts ? state.accounts.get('list') : null
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    deleteAccount
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);

