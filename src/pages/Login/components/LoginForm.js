import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { login } from '../actions/authActions';

class LoginForm extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  };

  /**
   * Triggered when the credential inputs content are changed  
   * @param {string} name The input name
   * @param {Event} e
   * @returns None Change the state with the input data inserte
   */
  handleChange = name => (e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;
    this.setState({ formData });
  }

  /**
   * Logs in a user when the credentials are correct
    TODO: when credentials not correct show a message with toastr
    @param {Event} e 
    @returns None Change the state into redux store so the success will trigger the render function to redirect
   */
  handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.formData.email,
      password: this.state.formData.password
    }
    this.props.login(user);
  }

  render() {
    let { formData } = this.state;

    return (
      <div className="login-form">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleLogin}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            margin="dense"
            id="email"
            label="Email"
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={this.handleChange('email')}
            validators={['required', 'isEmail']}
            errorMessages={['This field is required', 'Email is not valid']}
          />
          <TextValidator
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            name="password"
            value={formData.password}
            onChange={this.handleChange('password')}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <Button type="submit" variant="contained" size="small" color="primary">
            Login
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({ login }, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginForm);