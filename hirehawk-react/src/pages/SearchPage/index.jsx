

//external dependenciess
import React from 'react'
import qs from 'qs'
//internal dependencies
import HireHawkLogo from 'components/HireHawkLogo';
import AdvertSearch from 'containers/AdvertSearch';
import './styles.css'
import 'styles/positioning.css'
// test data
import HireHawkLogoImage from 'test/media/images/HireHawkLogoImage.png'
import AdvertList from 'containers/AdvertList'
import Button from '@material-ui/core/Button';
import DetailedSearch from 'containers/DetailedSearch'
import {adverts} from 'test/data.jsx'
import AdvertAPI from 'api/AdvertAPI'
import {connect} from 'react-redux'
import SearchUtils from 'classes/data/SearchUtils'
class SearchPage extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       searchParams:SearchUtils.toSearchParams(link),
       advertIDs:[],
       adverts:[],
     };
     this.handleSearch(this.state.searchParams);
   }
   getAdvertsByIDs(ids){
          for(let id of ids){
              AdvertAPI.getAdvertById(id).then(result =>{
                this.state.adverts.push(result);

                this.forceUpdate();
              });
            }
   }
   handleSearch(searchParams){
     //getLinks (search API)
     let ids= ['5bdf297bb244a92360687382','5bdf2dc9b244a90ee0ee4c91'];
     this.setState({
       advertIDs:ids,
       adverts:[]
     });
      this.getAdvertsByIDs(ids);
   }
   handleSearchParamsChange(searchParams){
     this.setState({
       searchParams:searchParams,
     });
   }
   componentDidMount(){

   }
   render(){
    return (
    <div className='overflowXHidden'>
      <DetailedSearch onSearch={this.handleSearch.bind(this)}
                      onChange={this.handleSearchParamsChange.bind(this)}
                      searchParams={this.state.searchParams}
                      className='searchPage-detailedSearch'
                      adverts={undefined}
                      history={this.props.history}
              />
            <AdvertList className='searchPage-advertList' adverts ={this.state.adverts}></AdvertList>
    </div>);
  }
};
export default SearchPage;
