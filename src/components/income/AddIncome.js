import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tooltip from '@material-ui/core/Tooltip';
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton';
import { addIncome } from '../../store/actions/moneyActions';
import DialogAddIncome from './DialogAddIncome';

class AddIncome extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleAddIncome = (data) => {
    this.props.addIncome(data);
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title="Add income" classes={{ tooltip: classes.lightTooltip }}>
          <IconButton color="inherit" onClick={this.handleClickOpen}>
            <MaterialIcon icon="monetization_on" color="white" size={30} />
          </IconButton>
        </Tooltip>
        <DialogAddIncome
          open={this.state.open}
          title="Add Income"
          handleSubmit={this.handleAddIncome}
          handleClose={this.handleClose}
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addIncome,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
