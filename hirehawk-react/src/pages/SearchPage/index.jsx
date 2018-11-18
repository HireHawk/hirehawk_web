

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
class SearchPage extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       searchParams:{
         query:link.query,
         minPrice:{
           price:undefined,
           period:'day',
           currency:'uah',
         },
         maxPrice:{
           price:undefined,
           period:'day',
           currency:'uah',
         },
         minDuration:{
           month:undefined,
           days:undefined,
           hours:undefined,
         }
       }
     };
   }
   handleSearch(searchParams){
     return 'working on it';
   }
   handleSearchParamsChange(searchParams){
     this.setState({
       searchParams:searchParams,
     });
   }
   render(){
    return (
    <div className='fullScreen'>
      <DetailedSearch onSearch={this.handleSearch.bind(this)}
                      onChange={this.handleSearchParamsChange.bind(this)}
                      searchParams={this.state.searchParams}
                      className='searchPage-detailedSearch'
                      adverts={undefined}
              />
      <AdvertList className='searchPage-advertList'></AdvertList>
    </div>);
  }
};
export default SearchPage;
