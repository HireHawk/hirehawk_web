

//external dependenciess
import React from 'react'
//internal dependencies
import BlockLink from 'components/BlockLink';
import HireHawkLogo from 'components/HireHawkLogo';
import LoginButton from 'containers/LoginButton';
import ExternalLoginButton from 'containers/ExternalLoginButton';
import AdvertSearch from 'containers/AdvertSearch';
import './styles.css'
import 'styles/positioning.css'
// test data
import Bike from 'test/media/images/bike.jpeg'
import Hat from 'test/media/images/hat.jpeg'
import HireHawkLogoImage from 'test/media/images/HireHawkLogoImage.png'
import AdvertList from 'components/AdvertList'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

class SearchPage extends React.Component{
   constructor(props){
     super(props);
     this.state={};
   }
   handleGiveThingsClick(){

   }
   handleLoginPopup(){

   }
   render(){
    return (
    <div className='fullScreen'>
      <HireHawkLogo image={HireHawkLogoImage} className='searchPage-mainLogo'/>
      <AdvertSearch className='searchPage-advertSearch' > </AdvertSearch>
      <AdvertList className='searchPage-advertList'></AdvertList>
          <Button onClick={this.handleSearch} color="primary">
            Search!
          </Button>
    </div>);
  }
};
export default SearchPage;
