import update from 'immutability-helper'
import Keycloak from 'keycloak-js';
import keycloakConfig from 'config/keycloak.json'
//https://github.com/kolodny/immutability-helper

//later there might be several reducers that will be assembled in this file.
const initialState ={
    uselessDummy:{subuselessDummy:1},
    keycloak:Keycloak(keycloakConfig)
  }

const reducer=(state=initialState, action)=>{

   switch(action.type){
     case 'CH_CURR_CONF':
       return update(state, {
        currentConfig:{$set:action.payload}});

     default:
        return state;
   }

}
export default reducer;
