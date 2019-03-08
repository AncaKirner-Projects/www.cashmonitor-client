import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import CategoryCard from './CategoryCard';
import ConfirmationDialog from '../../Application/components/ConfirmationDialog';

class CategoryList extends Component {
  // TODO: change dummy data to come from API
  state = {
    disabled: true,
    openConfirm: false,
    confirmTitle: 'Confirmation',
    confirmQuestion: 'Are you sure you want to delete the category?',
    categId: 0,
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
    // TODO: remove nextId when API data given
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

  handleDeleteCaregory = () => {
    const categories = [...this.state.categories];
    const newList = categories.filter((elem) => elem.id !== this.state.categId);

    this.setState({
      ...this.state,
      openConfirm: false,
      categories: newList
    });
  }

  handleConfirmationClose = () => {
    this.setState({
      openConfirm: false
    });
  }

  handleOpenConfirmationDialog = (categId) =>{
    this.setState({
      openConfirm: true,
      categId
    });
  }

  render() {
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
              onDeleteCaregory={this.handleOpenConfirmationDialog}
            />
        )}
        <ConfirmationDialog 
          open={this.state.openConfirm}
          title={this.state.confirmTitle}
          question={this.state.confirmQuestion}
          onHandleClose={this.handleConfirmationClose}
          onHandleConfirmOk={this.handleDeleteCaregory}
        />
      </div>
    );
  }
}
 
export default CategoryList;