import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
// import { withRouter } from "react-router";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from '../styles/loginStyles';
import styled from 'styled-components';
import { compose } from 'recompose';
import { login } from '../../store/actions/userActions';

const PaperStlyled = styled(Paper)`
  margin: auto;
`;

class LoginPage extends Component {
  state = {
    redirectToReferrer: false,
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
    this.props.history.push('/');
  }

  render() {
    const { classes, isAuthenticated } = this.props;
    let { formData } = this.state;

    if (isAuthenticated) {
      return <Redirect to='/' />
    }

    return (
      <PaperStlyled className={classes.root} elevation={1} >
        <Typography align="center" variant="h5" component="h2">
          Login
        </Typography>
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
          <br /><br />
          <Button type="submit" variant="contained" size="small" color="primary" fullWidth>
            Login
          </Button>
        </ValidatorForm>
      </PaperStlyled>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.auth
  // status: state.user.login.status
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    login
  }, dispatch)
});

export default withRouter(compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage));