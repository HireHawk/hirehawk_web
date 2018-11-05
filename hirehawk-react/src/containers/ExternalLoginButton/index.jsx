
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Keycloak from 'keycloak-js';
import KeycloakAPI from 'api/KeycloakAPI'
import keycloakConfig from 'config/keycloak.json'

import LoadingIcon from 'components/common/LoadingIcon'
import {Link} from 'react-router-dom'

class ExternalLoginButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:undefined,
      login:undefined,
      password:undefined,
      loading:false,
      emailDialog:{
        open: false,
        inputError: false
      },
      passwordDialog:{
        open: false,
      },
      keycloak:null,
      authenticated:null,
    };
    const kc = Keycloak(keycloakConfig);
    kc.init({onLoad: 'login-required'}).then(authenticated => {
           this.setState({ keycloak: kc, authenticated: authenticated });
     });
  }

 handleLogin =()=>{
 }
 handleLogout=()=>{

 }
 handleCheckLogin=()=>{
   if(this.state.keycloak)this.state.keycloak.login({prompt:'none'});
 }

  render() {
    if (this.state.keycloak) {
        if (this.state.authenticated)
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.state.keycloak.logout}>Logout</button>
              </div>
            );
        else{
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.state.keycloak.login}>Login/Register</button>
            </div>
          );
          }
    }else {
            return (
                  <div>
                    <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.state.keycloak.login}>Checking user...</button>
                  </div>
                );
    }
  };
}
export default ExternalLoginButton;
