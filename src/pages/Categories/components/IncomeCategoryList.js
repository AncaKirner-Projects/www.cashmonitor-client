import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

import ConfirmationDialog from '../../Application/components/ConfirmationDialog';

class IncomeCategoryList extends Component {
  state = {
    openConfirm: false,
    confirmTitle: 'Confirmation',
    confirmQuestion: 'Are you sure you want to delete the item?',
    categId: 0,
    lastId: 3,
    categories: [
      { id:1, name: 'Salary' },
      { id:2, name: 'Meal voucher' },
      { id:3, name: 'Gift' }
    ]
  }

  handleOpenConfirmationDialog = (categId) => {
    this.setState({
      openConfirm: true,
      categId
    });
  }

  handleConfirmationClose = () => {
    this.setState({
      openConfirm: false
    });
  }

  handleChange = (id, e) => {
    const categoryList = [...this.state.categories];    
    const index = categoryList.findIndex(elem => id === elem.id);
    categoryList[index].name = e.target.value;

    this.setState({ categories: categoryList })
  }

  handleAddCategory = () => {
    const nextId = this.state.lastId + 1;
    this.setState({
      categories: [
        ...this.state.categories,
        { id: nextId, name: ''}
      ], 
      lastId: nextId
    });
  }

  handleDeleteCategory = () => {
    const nextId = this.state.lastId - 1;
    const categories = [...this.state.categories];
    const newList = categories.filter((elem) => elem.id !== this.state.categId);

    this.setState({
      openConfirm: false,
      categories: newList,
      lastId: nextId
    });
  }

  render() {
    return ( 
      <div className="categ-div">
        <Typography variant="h6" component="h6">
          Income Categories &nbsp;&nbsp;
          <Fab color="primary" aria-label="Add" size="small">
            <AddIcon onClick={this.handleAddCategory}/>
          </Fab>
        </Typography>
        {
          this.state.categories && this.state.categories.map((categ) => 
            <div key={'icl'+categ.id} className='inc-cat-input input-height'>
              <TextField
                placeholder="Category name"
                value={categ.name}
                margin="normal"
                variant="outlined"
                onChange={(e) => this.handleChange(categ.id, e)}
              />
              <IconButton
                aria-owns='material-appbar'
                aria-haspopup="true"
                onClick={this.props.onDone}
              >
                <Delete onClick={() => this.handleOpenConfirmationDialog(categ.id)}/>
              </IconButton> 
            </div>
        )}
        <ConfirmationDialog 
          open={this.state.openConfirm}
          title={this.state.confirmTitle}
          question={this.state.confirmQuestion}
          onHandleClose={this.handleConfirmationClose}
          onHandleConfirmOk={this.handleDeleteCategory}
        />
      </div>
    );
  }
}
 
export default IncomeCategoryList;