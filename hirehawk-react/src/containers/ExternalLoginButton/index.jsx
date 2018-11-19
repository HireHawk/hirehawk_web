
import React from 'react';
import Keycloak from 'keycloak-js';
import keycloakConfig from 'config/keycloak.json'


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
 getToken=()=>{
   alert(this.state.keycloak.token);
 }

  render() {
    if (this.state.keycloak) {
        if (this.state.authenticated){
          if(!this.state.name){
            this.state.keycloak.loadUserProfile().success(((profile)=>{

                  this.setState({name:profile.firstName+' '+profile.lastName}).bind(this);
                })).error((()=> {
                  alert('Failed to load user profile');
                  this.setState({name:undefined}).bind(this);
                }));
          }
          return (
            <div>
              <button style = {this.props.button.style} className = {this.props.button.className} onClick={this.handleLogout.bind(this)}>Logout ({this.state.name})</button>
              <button style = {this.props.button.tokenStyle} className = {this.props.button.tokenClassName} onClick={this.getToken.bind(this)}>Get Token</button>
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
