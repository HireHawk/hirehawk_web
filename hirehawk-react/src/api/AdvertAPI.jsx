
import Config from 'config/api.json'
import request from 'superagent'
class AdvertAPI{
  // your/keycloak/url/auth/realms/master/protocol/openid-connect/token
  static getAdvertById(id){
    request
      .get(Config.advertapi.uri+'/'+Config.advertapi.getAdvert+'/'+id)
      .send({
      })
      .set('Content-Type', 'application/json')
      .then(res => {
        alert('yay got ' + JSON.stringify(res.body));
      });
    }
}

export default AdvertAPI;
