import React from 'react'
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MediaQuery from 'react-responsive'
import InfoChip from 'components/InfoChip'
import {registerPageRestrictions,registerPagePreferences} from './config.jsx'

import 'styles/positioning.css'
class MainFields extends React.Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            login: props.fields.login?props.fields.login:'',
            email: props.fields.email?props.fields.email:'',
            password: props.fields.password?props.fields.password:'',
            confirm: props.fields.confirm?props.fields.confirm:'',
            showPassword: false,
            showconfirm: false,
            errors: {
              email:null,
              login:null,
              password:null,
              confirm:null,
            },
            warnings: {
              email:null,
              login:null,
              password:null,
              confirm:null,
            }
        }
    }

    handleFieldChange(fieldName,error,warning,value){
      this.setState({
          [fieldName]: value,
          errors:{
            ...this.state.errors,
            [fieldName]:error
          },
          warnings:{
            ...this.state.warnings,
            [fieldName]:warning,
          }
        });
    }
    handleLoginChange(event) {
      let warning = null,error = null;
      if(event.target.value.length > registerPageRestrictions.loginMaxLength)
        error ='Can you think of something shorter?';
      else if(!(/^[a-z_A-Z]*$/.test(event.target.value)))
        error ='Only letters and underscores allowed!';
      this.handleFieldChange('login',error,warning,event.target.value);
    }
    handleEmailChange(event) {
      let warning = null,error = null;
      if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(event.target.value)){
          error ='Invalid e-mail structure!';
      }
      this.handleFieldChange('email',error,warning,event.target.value);
    }
    handlePasswordChange(event) {
      let error = null,warning = null;
      if(registerPageRestrictions.passwordMinLength > event.target.value.length){
         error =  'at list '+registerPageRestrictions.passwordMinLength+' symbols required!';
      } else if(registerPageRestrictions.passwordCapital && !(/^.*[A-Z].*/).test(event.target.value)){
          error= 'At least 1 capital letter required!'
      } else if(registerPageRestrictions.passwordOtherSymbol && !(/^.*[^a-zA-Z].*/).test(event.target.value)){
          error= 'At least 1 non-letter character required!'
      }
      this.handleFieldChange('password',error,warning,event.target.value);
    }
    handleconfirmChange(event) {
      let error = null,warning = null;
      if(this.state.password !== event.target.value){
        error = 'Passwords do not match!';
      }
      this.handleFieldChange('confirm',error,warning,event.target.value);
   }
    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }
    handleClickShowconfirm() {
        this.setState({
            showconfirm: !this.state.showconfirm
        });
    }

    isEmpty(value) {
        return !value.trim();
    }
    infoChipRender(errorString,warningString,data){
      return errorString!=null?
                <InfoChip minimized type='error' squared={data.squared}
                          showAlert={data.alert} info={errorString}
                          size='2.8em' style={data.style} fullWidth='calc(100vw - 100%)'/>
            :warningString!=null?
                <InfoChip minimized type='warning' squared={data.squared}
                          showAlert={data.alert} info ={warningString}
                          size='2.8em' style={data.style} fullWidth='calc(100vw - 100%)'/>
            :null
    }
    conditionalRender(paperStyle, textFieldStyle_info, infoChip,bigScreen){
      
      return(
        <Paper className={paperStyle} elevation={1} >
          <FormControl
                className={this.props.classes.textField}
                margin="normal">
                <InputLabel htmlFor="loginInput">Login</InputLabel>
                  <Input style={(this.state.errors.login || this.state.warnings.login)!=null?textFieldStyle_info:{}}
                    id="loginInput"
                    ref='login'
                    type='text'
                    value={this.state.login}
                    onChange={this.handleLoginChange.bind(this)}
                />
              {this.infoChipRender(this.state.errors.login,this.state.warnings.login,infoChip)}
            </FormControl>
        <FormControl
              className={this.props.classes.textField}
              margin="normal">
              <InputLabel htmlFor="emailInput">E-mail</InputLabel>
                <Input style={(this.state.errors.email || this.state.warnings.email)!=null?textFieldStyle_info:{}}
                  id="emailInput"
                  ref='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.handleEmailChange.bind(this)}
              />
            {this.infoChipRender(this.state.errors.email,this.state.warnings.email,infoChip)}
          </FormControl>
          <FormControl
              className={this.props.classes.textField}
              margin="normal">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input style={(this.state.errors.password || this.state.warnings.password)!=null?textFieldStyle_info:{}}
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handlePasswordChange.bind(this)}
                  endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowPassword.bind(this)}
                          >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  }
              />
            {this.infoChipRender(this.state.errors.password,this.state.warnings.password,infoChip)}
          </FormControl>

          <FormControl
              style={this.state.errors.confirm!=null?this.state.warnings.confirm!=null?textFieldStyle_info:{}:{}}
              className={this.props.classes.textField}
              margin="normal">
              <InputLabel htmlFor="confirm">Confirm password</InputLabel>
                <Input style={(this.state.errors.confirm|| this.state.warnings.confirm)!=null?textFieldStyle_info:{}}
                  id="confirm"
                  type={this.state.showconfirm ? 'text' : 'password'}
                  value={this.state.confirm}
                  onChange={this.handleconfirmChange.bind(this)}
                  endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowconfirm.bind(this)}
                          >
                              {this.state.showconfirm ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  }
              />
            {this.infoChipRender(this.state.errors.confirm,this.state.warnings.confirm,infoChip)}
          </FormControl>
          <div style={{ height: '2em' }} />{/*used for scaling,for textBoxes not to take */}
          <Button variant="contained"
              className={[this.props.classes.button, 'centered'].join(' ')}
              onClick={this.nextStep.bind(this)}>
              Continue
          </Button>
      </Paper>
      );
    }
    render() {
        let paperStyle = [this.props.classes.root,'centered'].join(' ');
        return (
          <div className='fullScreen'>
              <MediaQuery query='(min-width:calc(50em + 0.1px)'>
                {this.conditionalRender.bind(this)(paperStyle,{}, {squared:false, alert:false,style:{position:'absolute',left:'calc(105% + 5px)'}},true)
                }
              </MediaQuery>
              <MediaQuery query='(max-width:50em)'>
                {this.conditionalRender.bind(this)(paperStyle,{width:'calc(100% - 3em - 10px)'}, {squared:true,alert:true,style:{position:'absolute',right:'0px'}},false)
                }
              </MediaQuery>
          </div>
        )
    }
    nextStep(e) {
        e.preventDefault();

        let errorsContainer = [];

        if (this.isEmpty(this.state.login) ||
            this.isEmpty(this.state.email) ||
            this.isEmpty(this.state.password) ||
            this.isEmpty(this.state.confirm)) {
            errorsContainer.push("Some fields are empty");
        }

        if (this.state.password !== this.state.confirm) {
            errorsContainer.push("Passwords doesn't match");
        }

        this.setState({
            errors: errorsContainer
        });

        if (errorsContainer.length === 0) {
            var data = {
                login: this.state.login,
                email: this.state.email,
                password: this.state.password,
                confirm: this.state.confirm
            }

            this.props.saveValues(data);
            this.props.nextStep();
        }
    }
}

MainFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (MainFields);
