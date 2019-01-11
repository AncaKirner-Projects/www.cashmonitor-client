import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIncome from '../income/AddIncome';
import AddSpent from '../income/AddSpent';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../store/actions/userActions';

class SignedInLinks extends Component {
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
    this.props.logout();
    this.props.history.push('/login');
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);
    return (
      <React.Fragment>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <AddIncome classes={classes} />
          <AddSpent classes={classes} />
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-owns='material-appbar'
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
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

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    logout
  }, dispatch)
});


export default withRouter(connect(null, mapDispatchToProps)(SignedInLinks));