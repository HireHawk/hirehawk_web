import Config from 'config/api.json'
import request from 'superagent'

class AdvertAPI {
    static getAdvertById(id,token) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + id)
            .set('Authorization', 'Bearer '+token)
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };

    static createAdvert(advert,token) {
        request
            .post('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.createAdvert)
            .set('Authorization', 'Bearer '+token)
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
