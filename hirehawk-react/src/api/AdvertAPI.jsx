import Config from 'config/api.json'
import request from 'superagent'

class AdvertAPI {
    static getAdvertById(id) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + id)
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };
    static getAllAdverts(id) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + id)
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };
    static getAdvertsByIdList(ids) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + ids)
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
