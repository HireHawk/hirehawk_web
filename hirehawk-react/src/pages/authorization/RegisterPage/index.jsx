import React from 'react'
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import 'styles/positioning.css'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '720px',
  },
  button:{
    margin: theme.spacing.unit,
    background: '#333333',
    color:'white'
  },
  bottomPanel:{
    position:'fixed',
    height:'20%',
    width:'100%',
    bottom:0,
    left:0,
    background:'#666666'
  },
  container: {
    background:'blue'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderRadius:0,
    color:'red',
    width:'100%'
  },
  textfield: {
    color:'red'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  header: {
    display:'block',
    position:'absolute',
    top:0,
    left:0,
    height:'10%',
    width:'100%',
    textAlign:'center',
    verticalAlign:'center',
    color:'white',
    textShadow: `#000 0px 0px 0.5px,   #000 0px 0px 0.5px,   #000 0px 0px 0.5px,
                 #000 0px 0px 0.5px,   #000 0px 0px 0.5px,   #000 0px 0px 0.5px`,
  },
  palette: {
    primary: 'yellow',
    secondary: 'yellow',
    error: 'red',
    common: {
      darkBlack: 'yellow',
    }
  },
});


class RegisterPage extends React.Component{

  constructor(){
    super();
    this.state={
      login:'',
      email:'',
      password:'',
      part:1,
    }
  }
  handleLoginChange(event){
    this.setState({
      login: event.target.value,
    });
  }
  handleEmailChange(event){
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordChange(event){
    this.setState({
      password: event.target.value,
    });
  }
  handleConfirmChange(event){
  }
  render(){
     var firstPart = (
            <Paper className={[this.props.classes.root,'centered'].join(' ')} elevation={1}>
              <div style={{position:'relative'}}>
                   <TextField  id="loginInput"
                               name="login"
                               label="login"
                               className={this.props.classes.textField}
                               value={this.state.login}
                               onChange={this.handleLoginChange.bind(this)}
                               margin="normal"
                               variant="outlined"
                               inputs1tyle={{backgroundColor:'red'}}
                               style={{color:'red'}}
                               />
                  <TextField  id="emailInput"
                               label="e-mail"
                               name='email'
                               className={this.props.classes.textField}
                               value={this.state.email}
                               onChange={this.handleEmailChange.bind(this)}
                               margin="normal"
                               variant="outlined"
                               />
                  <TextField  id="passwordInput"
                               label="password"
                               name='password'
                               className={this.props.classes.textField}
                               value={this.state.password}
                               onChange={this.handlePasswordChange.bind(this)}
                               margin="normal"
                               variant="outlined"
                               />
                 <TextField  id="confirmInput"
                               label="confirm password"
                               className={this.props.classes.textField}
                               onChange={this.handleConfirmChange.bind(this)}
                               margin="normal"
                               variant="outlined"
                               />
                             <div style={{height:'5em'}}/>{ /*used for scaling,for textBoxes not to take */}
            </div>
            <div className={this.props.classes.bottomPanel}>
              <Button variant="contained" className={[this.props.classes.button,'centered'].join(' ')}>
                     C o n t i n u e
              </Button>
            </div>
          </Paper>
     )
     var secondPart=(
       <div>todo</div>
     )
     var html=(
       <div className='fullScreen' style={{background:'#444444'}}>
         <div className ={this.props.classes.header}>
           <h1>Registration</h1>
         </div>
            {this.state.part===1?firstPart:secondPart}
       </div>
     );
    return <div>{html}</div>;
  }

};
RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterPage);
