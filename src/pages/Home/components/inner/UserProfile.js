import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import removeCookies from '../../../../helpers/cookiesRemover';
import { history } from '../../../../store/index';
import { logout } from '../../../Login/actions/authActions';

class UserProfile extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    removeCookies(true);
    this.props.logout();
    history.push('/login');
  }

  render() { 
    const isMenuOpen = Boolean(this.state.anchorEl);
    return ( 
      <React.Fragment>
        <IconButton
          aria-owns='material-appbar'
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
     );
  }
}

/**
 * Get access to the action logout defined in redux actions
 * @param {function} dispatch 
 */
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({ logout }, dispatch)
});

export default connect(null, mapDispatchToProps)(UserProfile);