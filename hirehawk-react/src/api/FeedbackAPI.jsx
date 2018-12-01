import Config from 'config/api.json'
import request from 'superagent'

class FeedbackAPI{
    static getForUser(id) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdvert + '/' + id)
            .on('error', err => {
                console.log('getAdvertById encountered error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };
    static getForAdvert(id) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAllAdverts + '/' + id)
            .on('error', err => {
                console.log('getAllAdverts encountere error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };
    static postForAdvert(ids) {
      return  request
            .get('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAdverts + '/' + ids.join(','))
            .on('error', err => {
                console.log('getAdvertsByList encountered error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };

    static postForUser(advert,token) {
        request
            .post('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.createAdvert)
            .set('Authorization', 'Bearer '+token)
            .send(advert)
            .set('Content-Type', 'application/json')
            .on('error', err => {
                console.log('createAdvert encountered error');
            })
            .then((res) => {
                alert('got JSON advert: ' + JSON.stringify(res.body));
            })
    }
}


export default FeedbackAPI;
