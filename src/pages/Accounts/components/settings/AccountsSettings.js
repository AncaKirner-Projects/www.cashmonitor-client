import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import AccountsTable from './AccountsTable';

class AccountSettings extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <Typography className="content-header" variant="h5" component="h2">
          My Accounts
        </Typography>
        <AccountsTable />
      </React.Fragment>
    );
  }
}

export default (AccountSettings);
