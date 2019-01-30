import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { currencies, accountTypes } from '../../../helpers/types';

class AddAccountDialog extends Component {
  state = { 
    formData: {
      account: '',
      type: '',
      balance: '',
      currency: ''
    }
   }

  componentDidMount() {
    ValidatorForm.addValidationRule('minLength', value => (value.length > 0) ? true : false);
  }
  
  handleClose = () => {
    this.props.onClose();
    this.setState({
      formData: {
        account: '',
        type: '',
        balance: '',
        currency: ''
      }
    });
  }

  handleChange = name => (e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.handleClose();
    // this.props.onSubmit(this.state.formData);
  }

  render() {
    let { formData } = this.state;
    const { open, title, data } = this.props;

    if (data) {
      formData = data;
    }
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
          <DialogTitle disableTypography  id="form-dialog-title" className="dialog-header">{title}</DialogTitle>
          <DialogContent>
            <TextValidator
              autoFocus
              margin="normal"
              id="account"
              label="Account Name"
              fullWidth
              name="account"
              value={formData.account}
              onChange={this.handleChange('account')}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <SelectValidator
              id="standard-select-currency-native"
              select
              label="Type"
              className="select-text-field"
              value={formData.type}
              onChange={this.handleChange('type')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: "select-menu"
                }
              }}
              margin="normal"
              fullWidth
              name="type"
              validators={['required', 'minLength']}
              errorMessages={['Please select a value', 'Please select a value']}
            >
              <option key={0} value=""></option>
              { accountTypes && accountTypes.map((option, id) => (
                <option key={id} value={option}>{option}</option>
              ))}
            </SelectValidator>
            <TextValidator
              margin="normal"
              id="balance"
              label="Amount"
              fullWidth
              name="balance"
              value={formData.balance}
              onChange={this.handleChange('balance')}
              validators={['required', 'isNumber']}
              errorMessages={['This field is required', 'Amount is not valid']}
            />
            <SelectValidator
              id="standard-select-currency-native"
              select
              label="Currency"
              className="select-text-field"
              value={formData.currency}
              onChange={this.handleChange('currency')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: "select-menu"
                }
              }}
              margin="normal"
              fullWidth
              name="currency"
              validators={['required', 'minLength']}
              errorMessages={['Please select a value', 'Please select a value']}
            >
              <option key={0} value=""></option>
              { currencies && currencies.map((option, id) => (
                <option key={id} value={option}>{option}</option>
              ))}
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
 
export default AddAccountDialog;