import Config from 'config/api.json'
import request from 'superagent'

class AdvertAPI {
    // your/keycloak/url/auth/realms/master/protocol/openid-connect/token
    static getAdvertById(id) {
        alert(Config.advertapi.uri);
        request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + id)
            .send({})
            .set('Content-Type', 'application/json')
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
                alert('got JSON advert: ' + JSON.stringify(res.body));
            })
    };

    static createAdvert(advert) {
        request
            .post('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.createAdvert)
            .send(advert)
            .set('Content-Type', 'application/json')
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
                alert('got JSON advert: ' + JSON.stringify(res.body));
            })
    }
}


export default AdvertAPI;
