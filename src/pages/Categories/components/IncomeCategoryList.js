import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const incCategories = [
  { id:1, name: 'Salary' },
  { id:2, name: 'Meal voucher' },
  { id:3, name: 'Gift' }
];

class IncomeCategoryList extends Component {
  state = { 
    categories: [
      { id:1, name: 'Salary' },
      { id:2, name: 'Meal voucher' },
      { id:3, name: 'Gift' }
    ]
  }

  handleChange = (id, e) => {
    console.log('change');
    this.setState({categories: [...this.state.categories, {id, name: e.target.value} ]});
  }

  handleAddCategory = () => {
    this.setState({
      categories: [
        ...this.state.categories,
        { id: 4, name: ''}
      ]
    });
  }

  render() { 
    return ( 
      <React.Fragment>
        <Typography variant="h6" component="h6">
          Income Categories
        </Typography>
        {
          this.state.categories && this.state.categories.map((categ) => 
            <TextField
              id="outlined-cat-name"
              className={''}
              placeholder="Category name"
              value={categ.name}
              margin="normal"
              variant="outlined"
              onChange={(e) => this.handleChange(categ.id, e)}
            />
        )}
        <Fab color="primary" aria-label="Add" className={''}>
          <AddIcon onClick={this.handleAddCategory}/>
        </Fab>
      </React.Fragment>
    );
  }
}
 
export default IncomeCategoryList;