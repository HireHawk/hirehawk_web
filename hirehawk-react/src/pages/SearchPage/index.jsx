

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
     this.state={};
   }
   handleSearch(searchParams){
     return 'working on it';
   }
   render(){
    return (
    <div className='fullScreen'>
      <DetailedSearch onSearch={this.handleSearch.bind(this)}
                      startingData={this.props.startingData}
                      className='searchPage-detailedSearch'
              />
      <AdvertList className='searchPage-advertList'></AdvertList>
      {JSON.stringify(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }))}
    </div>);
  }
};
export default SearchPage;
