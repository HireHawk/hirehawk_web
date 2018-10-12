
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingIcon from 'components/common/LoadingIcon'

class LoginButton extends React.Component {
  state = {
    email:undefined,
    password:undefined,
    loading:false,
    emailDialog:{
      open: false,
      inputError: false
    },
    passwordDialog:{
      open: false,
    }
  };
   emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  handleClickOpen = () => {
    this.setState({emailDialog:{ open: true }});
  };

  emailDialog={
    handleInputChange: (e)=>{
      if(this.emailRegex.test(e.target.value))this.setState({email:e.target.value, emailDialog:{...this.state.emailDialog,inputError:false}});
      else this.setState({emailDialog:{...this.state.emailDialog,inputError:true}})
    },
    handleLogin: (e) => {
      if(this.state.emailDialog.inputError)
        alert('enter correct email!');
      else{
          this.setState({loading:true,email:this.state.email});
          setTimeout(()=>{
            if(Math.random()%2)
              this.setState({loading:false,emailDialog:{open: false },passwordDialog:{open:true}});
            else alert('email is not registered!');
          }, 1000);
        }
    },
    handleClose: () => {
      this.setState({email:undefined,emailDialog:{open: false }});
    },
    handleRegister: () => {
      alert('for now it is a stub');
      this.setState({emailDialog:{open: false }});
    }
  }
  passwordDialog={
    handleForgotPassword: ()=>{
      alert('For now, there is nothing I can do..')
    },
    handleClose: () => {
      this.setState({passwordDialog:{open: false} });
    },
    handleLogin: () => {
      alert('great, at some point server will handle this')
      this.setState({emailDialog:{open: false },passwordDialog:{open:true}});
    }
  }

  render() {
    return (
      <div>
        <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleClickOpen}>Login/Register</button>
        <Dialog
          open={this.state.emailDialog.open}
          onClose={this.emailDialog.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login/Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              enter your e-mail:
            </DialogContentText>
            <Input
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              onChange={this.emailDialog.handleInputChange}
              fullWidth
              error ={this.state.emailDialog.inputError}
            />
          {this.state.loading?<div style={{height:'150px'}}>
            <LoadingIcon/>
          </div>:null}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.emailDialog.handleRegister} color="primary">
              Register
            </Button>
            <Button onClick={this.emailDialog.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.emailDialog.handleLogin} color="primary">
              Continue
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.passwordDialog.open}
          onClose={this.passwordDialog.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.state.email}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="email"
              fullWidth

            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.passwordDialog.handleForgotPassword} color="primary">
              Forgot?
            </Button>
            <Button onClick={this.passwordDialog.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.passwordDialog.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}
export default LoginButton;
