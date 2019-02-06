import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './Contact.css'


export default class FormDialog extends React.Component {
  state = {
    open: false,
    input: ''
  };

  handleClickOpen = () => {
    this.setState({ 
      open: true });
  };

  handleClose = () => {
    this.setState({ 
      open: false });
  };

  handleInput = event => {
    this.setState({
      input: event.value
    })
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Gra za e-mail
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Prześlij swój e-mail</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Podaj nam swój e-mail, a otrzymasz dostęp do gry KraftMan :)
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Adres e-mail"
              type="email"
              value={this.state.input}
              onChange={this.handleInput}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Zrezygnuj
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Prześlij
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}