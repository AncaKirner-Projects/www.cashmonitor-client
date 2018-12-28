import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import styles from '../styles/moneyStyles';

class DialogAddIncome extends Component {
  state = {
    open: false,
    openAlertDialog: false,
    formData: {
      amount: '',
      date: '2018-11-29',
      description: '',
      account: ''
    }
  };

  handleChange = name => (e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;
    this.setState({ formData });
  };

  handleClose = () => {
    this.props.handleClose();
    this.setState({
      formData: {
        amount: '',
        date: '2018-11-29',
        description: '',
        account: ''
      }
    });
  }

  handleSubmit = () => {
    this.handleClose();
    this.props.handleSubmit(this.state.formData);
  }

  render() {
    const { formData } = this.state;
    const { open, title } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              id="date"
              label="Date"
              type="date"
              value={formData.date}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <TextValidator
              margin="normal"
              id="amount"
              label="Amount"
              fullWidth
              name="amount"
              value={formData.amount}
              onChange={this.handleChange('amount')}
              validators={['required', 'isNumber']}
              errorMessages={['This field is required', 'Amount is not valid']}
            />
            <TextValidator
              id="standard-textarea"
              label="Description"
              multiline
              margin="normal"
              fullWidth
              name="description"
              value={formData.description}
              onChange={this.handleChange('description')}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <SelectValidator
              id="standard-select-currency-native"
              autoFocus
              select
              label="Account"
              className={styles.textField}
              value={formData.account}
              onChange={this.handleChange('account')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: styles.menu
                }
              }}
              margin="normal"
              fullWidth
              name="account"
              validators={['required']}
              errorMessages={['This field is required']}
            >
              <option key={0} value="Please select">
                - Please select -
                </option>
              <option key={1} value="Portofel">
                Portofel
                </option>
              {/* {categories && categories.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))} */}
            </SelectValidator>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >
              Save
              </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default DialogAddIncome;