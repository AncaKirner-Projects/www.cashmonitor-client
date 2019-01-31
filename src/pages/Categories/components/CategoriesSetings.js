import React, { Component } from 'react';
import BudgetSettings from './BudgetSettings';
import CategoryList from './CategoryList';
import IncomeCategoryList from './IncomeCategoryList';

class CategoriesSettings extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        {/* <BudgetSettings /> */}
        <CategoryList />
        <IncomeCategoryList />
      </React.Fragment>
    );
  }
}
 
export default CategoriesSettings;