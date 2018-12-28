import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tooltip from '@material-ui/core/Tooltip';
import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton';
import { addSpent } from '../../store/actions/moneyActions';
import DialogAddSpent from './DialogAddIncome';

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

  handleAddSpent = (data) => {
    this.props.addSpent(data);
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title="Add spent" classes={{ tooltip: classes.lightTooltip }}>
          <IconButton color="inherit" onClick={this.handleClickOpen}>
            <MaterialIcon icon="add_shopping_cart" color="white" size={30} />
          </IconButton>
        </Tooltip>
        <DialogAddSpent
          open={this.state.open}
          title="Add Spent"
          handleSubmit={this.handleAddSpent}
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
    addSpent,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
