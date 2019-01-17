import React from 'react';

import TopBarButtons from './inner/TopBarButtons';

class TopBar extends React.Component {
  render(){
    return (
      <div className="app-top-bar">
        <div className="app-top-bar-options clearfix">
          <div className="user-menu right">
            <TopBarButtons />
          </div>
        </div>
      </div>
    );
  }
};

export default (TopBar);