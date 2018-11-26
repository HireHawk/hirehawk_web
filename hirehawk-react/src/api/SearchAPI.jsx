import Config from 'config/api.json'
import request from 'superagent'

class SearchAPI {
    static searchAdverts(params) {
      let newParams={};
      
      return  request
            .get('http://' + Config.search.uri + '/' + Config.search.endPoints.findAdverts)
            .on('error', err => {
                console.log('error obtaining search results');
            })
            .then((res) => {
              console.log('got Search results: ' + JSON.stringify(res.body));
              return res.body;
            })
    };
}


export default SearchAPI;
