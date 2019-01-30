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
  state = {  }

  render() { 
    return ( 
      <React.Fragment>
        <Typography variant="h6" component="h6">
          Income Categories
        </Typography>
        {
          incCategories && incCategories.map((categ) => 
            <TextField
              id="outlined-cat-name"
              className={''}
              defaultValue="Category name"
              value={categ.name}
              margin="normal"
              variant="outlined"
            />
        )}        
        <Fab color="primary" aria-label="Add" className={''}>
          <AddIcon />
        </Fab>
      </React.Fragment>
    );
  }
}
 
export default IncomeCategoryList;