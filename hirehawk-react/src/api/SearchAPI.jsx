import Config from 'config/api.json'
import request from 'superagent'
import SearchUtils from 'classes/data/SearchUtils'

class SearchAPI {
    static searchAdverts(params) {
      let newParams={};
      let req = request.get('http://' + Config.searchapi.uri + '/' + Config.searchapi.endPoints.findAdverts);
      //searchValue(String, optional), category(String, optional), info(boolean, option$
      let num_of_hours =SearchUtils.getHoursDuration(params);
      let minPricePerDay =SearchUtils.priceToACP_Day(params.minPrice);
      let maxPricePerDay =SearchUtils.priceToACP_Day(params.maxPrice);
      if(params.query){
        req.set('searchValue', params.query);
        console.log('added query to search: '+params.query);
      }
      if(params.category!==[]){
        req.set('category', SearchUtils.categoryToString(params.category));
        console.log('added category to search: '+SearchUtils.categoryToString(params.category));
      }
      //if(params.info)req.set('info', params.query);
      if(minPricePerDay)req.set('minPrice', minPricePerDay);
      if(maxPricePerDay)req.set('maxPrice', maxPricePerDay);
      if(num_of_hours)req.set('num_of_hours', params.query);

          req.on('error', err => {
                console.log('error obtaining search results');
            })
            .then((res) => {
              console.log('got Search results: ' + JSON.stringify(res.body));
              return res.body;
            })
      return
    };
}


export default SearchAPI;
