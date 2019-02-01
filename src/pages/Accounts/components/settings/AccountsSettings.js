import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import SimpleTable from '../../../Application/components/SimpleTable';

class AccountSettings extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Typography className="content-header" variant="h5" component="h2">
          My Accounts
        </Typography>
        <SimpleTable />
      </React.Fragment>
    );
  }
}

export default AccountSettings;
