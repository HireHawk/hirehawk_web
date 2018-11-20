
//external dependenciess
import React from 'react'
import Button from '@material-ui/core/Button';
//internal dependencies
import BlockLink from 'components/BlockLink';
import HireHawkLogo from 'components/HireHawkLogo';
import ExternalLoginButton from 'containers/ExternalLoginButton';
import AdvertSearch from 'containers/AdvertSearch';
import keycloakAPI from 'api/KeycloakAPI'
import AdvertAPI from 'api/AdvertAPI'
// props and styles
import './styles.css'
import 'styles/positioning.css'
// test data
import Bike from 'test/media/images/bike.jpeg'
import Hat from 'test/media/images/hat.jpeg'
import HireHawkLogoImage from 'test/media/images/HireHawkLogoImage.png'

class MainPage extends React.Component{
   constructor(props){
     super(props);
     this.state={};
   }
   handleGiveThingsClick(){

   }
   handleLoginPopup(){
     alert('aa');
   }
   TEST_handleGetTokensByPassword(){
     let login =prompt("Please enter your login", "standoe");
     let password =prompt("Please enter your password", "undefined");
     alert(JSON.stringify(keycloakAPI.getTokensByPassword(login,password)));
   }
   TEST_handleGetAdverts(){
     var id = prompt("Enter advert id",'5bdf297bb244a92360687382');
     AdvertAPI.getAdvertById(id);
   }
   render(){
    return (
    <div className='fullScreen'>
      <Button onClick={this.TEST_handleGetAdverts}>AdvertButton</Button>
      <Button onClick={this.TEST_handleGetTokensByPassword}>LoginButton</Button>
      <HireHawkLogo image={HireHawkLogoImage} className='mainPage-mainLogo'/>
      <ExternalLoginButton button={{style:{}, className:'mainPage-loginButton'}}/>
      <AdvertSearch className='mainPage-advertSearch' history={this.props.history} > </AdvertSearch>
      <div className='mainPage-imageLinkContainer'>
        <BlockLink name='Give things!' className='mainPage-imageLink' onClick={this.handleGiveThingsClick} backgroundImage={Bike}/>
        <BlockLink name='Take things!' className='mainPage-imageLink' onClick={this.handleGiveThingsClick} backgroundImage={Hat}/>
      </div>
        {/*temporary elements (design/etc)*/}
      <div style = {{position:'absolute', top:'60%', left:0, width:'100%', background:'black', height:'40%', zIndex:-1}}/>
      <div style = {{position:'absolute', bottom:0, left:0, width:'100%', textAlign:'center', height:'8%', color:'white', fontSize:'100%'}}>
      This is a test design with horrible CSS. Do not judge. 13
      </div>
    </div>);
  }
};
export default MainPage;
