import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { logout } from '../../store/actions/userActions';
import { SignedInLinks } from './SignedInLinks';

class NavBar extends Component {
  state = {
    open: false
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    const { open } = this.state;
    return (
      <div>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cash Controll
            </Typography>
            {
              isAuthenticated ?
                <div>
                  <SignedInLinks classes={classes} handleProfileMenuOpen={this.handleProfileMenuOpen} />
                </div>
                : ''
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.auth
  };
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    logout
  }, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
