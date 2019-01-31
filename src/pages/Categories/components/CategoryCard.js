import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteForever';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import ConfirmationDialog from '../../Application/components/ConfirmationDialog';

class CategoryCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      openConfirm: false,
      lastId: 4,
      disabled: this.props.disabled,
      category: props.category
    };
  }

  handleChangeCategoryName = (e) => {
    this.setState({ 
      category: {
        ...this.state.category,
        name: e.target.value
      } 
    })
  }

  handleEditCategoryName = () => {
    this.setState({
      ...this.state,
      disabled: false
    })
  }

  handleDisableEditCategoryName = () => {
    this.setState({
      ...this.state,
      disabled: true
    })
  }

  handleChangeSubcategoryName = (id, e) => {
    const subcategoryList = [...this.state.category.subcategories];    
    const index = subcategoryList.findIndex(elem => id === elem.id);
    subcategoryList[index].name = e.target.value;

    this.setState({ 
      category: {
        ...this.state.category,
        subcategories: subcategoryList
      } 
    })
  }

  handleEditSubcategoryName = () => {
    // todo: save in redux
  }

  handleAddSubcategory = () => {
    const nextId = this.state.lastId + 1;
    const subcategories = !!this.state.category.subcategories ? 
    [...this.state.category.subcategories, {id: nextId, name: ''}] : [{id: nextId, name: ''}];

    this.setState({
      category: {
        ...this.state.category,
        subcategories
      }, 
      lastId: nextId
    });
  }

  handleDeleteSubcaregory = (id) => {
    const nextId = this.state.lastId - 1;
    const subcategories = [...this.state.category.subcategories];
    const newList = subcategories.filter((elem) => elem.id !== id);

    this.setState({
      category: {
        ...this.state.category,
        subcategories: newList
      }, 
      lastId: nextId
    });
  }

  render() { 
    const { category } = this.state;

    return ( 
      <Card className="categ-card">
        <CardContent>
          <Typography align="left" variant="h5">
            <TextField 
                className="categ-header-name"
                placeholder="Category name"
                value={category.name}
                margin="normal"
                disabled={this.state.disabled}
                onChange={(e) => this.handleChangeCategoryName(e)}
                onBlur={this.handleDisableEditCategoryName}
              />
            &nbsp;&nbsp;
            <Fab color="secondary" size="small">
              <Edit onClick={this.handleEditCategoryName}/>
            </Fab>
            <Fab color="secondary" size="small">
              <Delete onClick={() => this.props.onDeleteCaregory(category.id)}/>
            </Fab>
            <Fab color="secondary" size="small">
              <AddIcon onClick={this.handleAddSubcategory}/>
            </Fab>
          </Typography>
          <div className='subcateg-div'>
            {
              category.subcategories && category.subcategories.map((categ) =>
                <div key={'cci'+categ.id} className="inc-cat-input">
                  <TextField 
                    className="input"
                    placeholder="Subcategory name"
                    value={categ.name}
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => this.handleChangeSubcategoryName(categ.id, e)}
                    onBlur={(e) => this.handleEditSubcategoryName(categ.id, e)}
                  />
                  <IconButton
                    aria-owns='material-appbar'
                    aria-haspopup="true"
                    onClick={this.props.onDone}
                  >
                    <Delete onClick={() => this.handleDeleteSubcaregory(categ.id)}/>
                  </IconButton>
                </div>
            )}
          </div>
          <ConfirmationDialog 
            open={this.state.openConfirm}
            title={}
            question={}
            onHandleClose={}
            onHandleConfirmOk={}
          />
        </CardContent>
      </Card>
    );
  }
}
 
export default CategoryCard;