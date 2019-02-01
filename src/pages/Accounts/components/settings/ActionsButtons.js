import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteForever';

class ActionsButtons extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-owns='material-appbar'
          aria-haspopup="true"
          onClick={this.props.onEdit}
          color="inherit"
        >
          <Edit />
        </IconButton>
        <IconButton
          aria-owns='material-appbar'
          aria-haspopup="true"
          onClick={this.props.onDelete}
          color="inherit"
        >
          <Delete />
        </IconButton>
      </React.Fragment>
    );
  }
}

export default ActionsButtons;
