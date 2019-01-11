import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { MenuList, MenuItem } from '@material-ui/core';


const TypoStlyled = styled(Typography)`
  padding: 10px 0px 0px 15px;
  text-decoration: none;
`;
const NestedDiv = styled('div')`
  margin-left: 0px;
  padding-left: 20px;
`;

class SideMenu extends Component {
  state = {
    open: true
  };

  render() {
    const { classes, theme, location: { pathname } } = this.props;
    console.log(pathname);
    console.log('SIDEMENU', this.props);
    const { open } = this.state;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawer,
        }}
      >
        <div className={classes.toolbar}></div>
        <MenuList>
          <MenuItem component={Link} to='/'>Dashboard</MenuItem>
          <Divider />
          <MenuItem component={Link} to='/settings' >Settings</MenuItem>
          <NestedDiv>
            <MenuItem
              component={Link}
              to='/settings/accounts'
            >
              My accounts
            </MenuItem>
            <MenuItem
              component={Link}
              to='/settings/categories'
            >
              Categories & Budget
            </MenuItem>
          </NestedDiv>
          <Divider />
        </MenuList>


      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// function mapStateToProps(state) {
//   return {
//     categories: state.categories
//   };
// }

// export default connect(mapStateToProps)(SideMenu);

export default withRouter(SideMenu);
