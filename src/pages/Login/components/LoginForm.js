import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { login } from '../actions/authActions';
import  { history } from '../../../store/index';

const INTL_MAP = {
  loginLabel: 'Please enter your user information',
  usLabel: 'Username',
  pwLabel: 'Password',
  signInLabel: 'Sign in',
  empty_username: 'Please enter your username',
  empty_password: 'Please enter your password'
};

class LoginForm extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  };

  handleChange = name => (e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;
    this.setState({ formData });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.formData.email,
      password: this.state.formData.password
    }

    this.props.login(user);
    history.push('/app');
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
  ...bindActionCreators({
    login
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginForm);