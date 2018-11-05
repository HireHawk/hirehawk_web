
import Config from 'config/api.json'

import keycloakConfig from 'config/keycloak.json'
class KeycloakAPI{
  // your/keycloak/url/auth/realms/master/protocol/openid-connect/token
  static getTokens(username, password){
    const userAction = async () => {
        const response = await fetch(
          keycloakConfig.authServerUrl+'/realms/'+keycloakConfig.realm+'/protocol/openid-connect/token', {
            method: 'POST',
            body: {
                client_id : keycloakConfig.clientId,

                username : username,
                password : password,
                grant_type : "password"
            },
            headers:{
              'Content-Type': 'application/json'
            }
          });
            const myJson = await response.json(); //extract JSON from the http response
            console.log("Tokens got:"+JSON.stringify(myJson));// do something with myJson
            return myJson;
        };
       return userAction();
      }
}

export default KeycloakAPI;
