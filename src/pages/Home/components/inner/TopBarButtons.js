import React, { Component } from 'react';

import AddIncomeSpent from './AddIncomeSpent';
import UserProfile from './UserProfile';
import AddToQueue from '@material-ui/icons/AddToQueue';
import RemoveFromQueue from '@material-ui/icons/RemoveFromQueue';

class TopBarButtons extends Component {
  spentIcon = <RemoveFromQueue />;
  incomeIcon= <AddToQueue />;

  handleAddSpent() {

  }

  handleAddIncome() {

  }

  render() {
    return ( 
      <React.Fragment>
        <AddIncomeSpent title="Add Spent" icon={this.spentIcon} handleSubmit={this.handleAddSpent}/>
        <AddIncomeSpent title="Add Income" icon={this.incomeIcon} handleSubmit={this.handleAddIncome}/>
        <UserProfile />
      </React.Fragment>
     );
  }
}
 
export default TopBarButtons;