import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import MenuList from './MenuList';

class SideBar extends React.Component {
  state = {
    open: true
  }
  render() {
    return (
      <div className="app-side-bar">
        <Drawer open={this.state.open}
        variant="permanent"
        classes={{paper: "drawer"}}
        >
          <div className="app-side-bar-options">
            <MenuList />
          </div>
        </Drawer>
      </div>
    );
  }
};

export default (SideBar);