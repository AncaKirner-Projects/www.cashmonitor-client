import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddToQueue from '@material-ui/icons/AddToQueue';
import DialogCashManagement from './DialogCashManagement';

class AddIncomeSpent extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSubmit = (data) => {
    this.props.handleSubmit();
    // this.props.addSpent(data);
    this.setState({ open: false });
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <Tooltip title={title}>
          <IconButton color="inherit" onClick={this.handleClickOpen}>
            {this.props.icon}
          </IconButton>
        </Tooltip>
        <DialogCashManagement
          open={this.state.open}
          title={title}
          onSubmit={this.handleSubmit}
          onClose={this.handleClose}
        />
        {/* <AlertDialog
          open={this.state.openAlertDialog}
          onHandleClose={this.handleAlertDialogClose}
          title="Request Status"
          text={addProductStatus && addProductStatus.message}
        /> */}
      </React.Fragment>
    );
  }
}

export default (AddIncomeSpent);