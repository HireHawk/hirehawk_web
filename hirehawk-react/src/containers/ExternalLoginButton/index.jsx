
import React from 'react';
import Keycloak from 'keycloak-js';
import keycloakConfig from 'config/keycloak.json'

import {connect} from 'react-redux'
class ExternalLoginButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:undefined,
      clickToken:undefined
    };
  }

 handleLogin =()=>{
   if(this.props.kcInitialized){
      this.props.keycloak.login();
    }
 }
 handleLogout=()=>{
   if(this.props.kcAuthenticated)this.props.keycloak.logout();
 }
 handleCheckLogin=()=>{
   if(this.props.kcInitialized)this.props.keycloak.login({prompt:'none'});
 }
 getToken=()=>{
   //let Copied = this.props.keycloak.token.createTextRange();
   //Copied.execCommand("Copy");
   alert(this.props.keycloak.token);
   this.setState({
     clickToken:this.props.keycloak.token
   })
 }

  render() {
    if (this.props.keycloak) {
        if (this.props.kcAuthenticated){
          if(!this.state.name){
            this.props.keycloak.loadUserProfile().success(((profile)=>{
                  this.setState.bind(this)({name:profile.firstName+' '+profile.lastName});
                })).error((()=> {
                  alert('Failed to load user profile');
                  this.setState.bind(this)({name:undefined});
                }));
          }
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleLogout.bind(this)}>Logout ({this.state.name})</button>
              <button style = {this.props.button.tokenStyle} className = {this.props.button.tokenClassName} onClick={this.getToken.bind(this)}>Click to get token</button>
              {this.state.clickToken?<input type='text' value={this.state.clickToken}/>:' '}
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

const mapStateToProps = (state)=>{
  return {
    keycloak:state.security.keycloak,
    kcAuthenticated:state.security.authenticated,
    kcInitialized:state.security.initialized
  }
}
const mapDispachToProps = (dispach)=>{
  return {
    changeSecAuthenticated:(value)=>dispach(
      {
        type:'SEC_CH_AUTHENTICATED',
        payload:
          {authenticated:value,
          }
      }),
      changeSecInitialized:(value)=>dispach(
        {
          type:'SEC_CH_INITIALIZED',
          payload:
            {initialized:value,
            }
        })
  };
}

export default  connect(mapStateToProps, mapDispachToProps) (ExternalLoginButton);
