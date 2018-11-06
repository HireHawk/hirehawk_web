
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
      name:undefined,
      keycloak:null,
      authenticated:null,
    };
    const kc = Keycloak(keycloakConfig);
    kc.init({onload: 'check-sso'}).then(authenticated => {
           this.setState({ keycloak: kc, authenticated: authenticated });
     });
  }

 handleLogin =()=>{
   if(this.state.keycloak)this.state.keycloak.login();
 }
 handleLogout=()=>{
   if(this.state.keycloak)this.state.keycloak.logout();
 }
 handleCheckLogin=()=>{
   if(this.state.keycloak)this.state.keycloak.login({prompt:'none'});
 }

  render() {
    if (this.state.keycloak) {
        if (this.state.authenticated){
          if(!this.state.name){
            this.state.keycloak.loadUserProfile().success(((profile)=>{

                  this.setState({name:profile.firstName+' '+profile.lastName}).bind(this);
                }).bind(this)).error((()=> {
                  alert('Failed to load user profile');
                  this.setState({name:undefined}).bind(this);
                }).bind(this));
          }
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleLogout.bind(this)}>Logout ({this.state.name})</button>
              </div>
            );
          }
        else{
          if(this.state.name){
            this.setState({name:undefined});
          }
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleLogin.bind(this)}>Login/Register</button>
            </div>
          );
          }
    }else {
            return (
                  <div>
                    <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleLogin.bind(this)}>Checking user...</button>
                  </div>
                );
    }
  };
}
export default ExternalLoginButton;
