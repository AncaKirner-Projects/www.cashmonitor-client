import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmationDialog = (props) => {
  const { fullScreen, open, title, question } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {question}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onHandleClose} color="primary">
          No
        </Button>
        <Button onClick={props.onHandleConfirmOk} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
