import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import CategoryCard from './CategoryCard';

class CategoryList extends Component {
  state = {
    disabled: true,
    lastId: 4,
    categories: [
      {
        id: 1, name: 'Shopings', subcategories: [
          {id:1, name: 'Food'},
          {id:2, name: 'Toys'},
          {id:3, name: 'Clothing'},
          {id:4, name: 'Apliances'}
        ]
      },
      {id: 2, name: 'Car', subcategories: [
        {id:1, name: 'Fuel'},
        {id:2, name: 'Repairs'}
      ]},
      {id: 3, name: 'Fishing'},
      {id: 4, name: 'Gifts'},
    ]
  }

  handleAddCategory = () => {
    const nextId = this.state.lastId + 1;
    this.setState({
      categories: [
        ...this.state.categories,
        { id: nextId, name: ''}
      ], 
      lastId: nextId,
      disabled: false
    });
  }

  handleDeleteCaregory = (id) => {
    const categories = [...this.state.categories];
    const newList = categories.filter((elem) => elem.id !== id);

    this.setState({
      ...this.state,
      categories: newList
    });
  }

  render() { 
    console.log(this.state);
    return ( 
      <div>
        <Typography variant="h6" component="h6">
          Categories &nbsp;&nbsp;
          <Fab color="primary" aria-label="Add" size="small">
            <AddIcon onClick={this.handleAddCategory}/>
          </Fab>
        </Typography>
        {
          this.state.categories && this.state.categories.map((categ) => 
            <CategoryCard key={'cl'+categ.id}
              category={categ} 
              disabled={this.state.disabled} 
              onDeleteCaregory={this.handleDeleteCaregory}
            />
        )}
      </div>
    );
  }
}
 
export default CategoryList;