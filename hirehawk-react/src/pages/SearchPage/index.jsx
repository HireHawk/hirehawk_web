

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
class SearchPage extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       searchParams:{
         query:link.query,
         category:link.category?link.category:[],
         location:link.location,
         minPrice:{
           price:link.minPrice?link.minPrice.price:undefined,
           period:link.minPrice?(link.minPrice.period?link.minPrice.period:'day'):'day',
           currency:link.minPrice?(link.minPrice.currency?link.minPrice.currency:'uah'):'uah',
         },
         maxPrice:{
           price:link.maxPrice?link.maxPrice.price:undefined,
           period:link.maxPrice?(link.maxPrice.period?link.maxPrice.period:'day'):'day',
           currency:link.maxPrice?(link.maxPrice.currency?link.maxPrice.currency:'uah'):'uah',
         },
         minDuration:{
           month:link.minDuration?link.minDuration.weeks:undefined,
           days:link.minDuration?link.minDuration.days:undefined,
           hours:link.minDuration?link.minDuration.hours:undefined,
         }
       },
       advertIDs:[],
       adverts:[],
     };
     this.handleSearch(this.state.searchParams);
   }
   getAdvertsByIDs(ids){
     let adverts=[];
          for(let id of ids){
              AdvertAPI.getAdvertById(id).then(result =>{
                this.state.adverts.push(result);
                alert(JSON.stringify(result));
                this.forceUpdate();
              });
            }
   }
   handleSearch(searchParams){
     //getLinks (search API)
     let ids= ['5bdf297bb244a92360687382','5bdf2dc9b244a90ee0ee4c91'];
     this.getAdvertsByIDs(ids);
     this.setState({
       advertIDs:ids,
     });
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
