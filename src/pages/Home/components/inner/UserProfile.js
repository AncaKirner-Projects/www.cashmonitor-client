import React, { Component } from 'react';
import { withRouter } from "eact-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    // this.props.logout();
    console.log(this.props);
    this.props.history.push('/login');

    // this.setState({ anchorEl: null });
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
 
export default withRouter(UserProfile);