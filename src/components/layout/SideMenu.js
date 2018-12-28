import React, { Component } from 'react';
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


const TypoStlyled = styled(Typography)`
  padding: 10px 0px 0px 10px;
  text-decoration: none;
`;

class SideMenu extends Component {
  state = {
    open: true
  };

  render() {
    const { classes, theme } = this.props;
    console.log('SIDEMENU', this.props);
    const { open } = this.state;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {['Dashboard', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <TypoStlyled variant="h6"></TypoStlyled>
        <List>
          {/* <MenuItems /> */}
        </List>
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

export default SideMenu;
