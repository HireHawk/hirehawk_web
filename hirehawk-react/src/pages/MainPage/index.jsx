
//external dependenciess
import React from 'react'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
//internal dependencies
import BlockLink from 'components/BlockLink';
import HireHawkLogo from 'components/HireHawkLogo';
import ExternalLoginButton from 'containers/ExternalLoginButton';
import AdvertSearch from 'containers/AdvertSearch';
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
     this.props.history.push({
       pathname: '/createAdvert'
     });
   }
   handleTakeThingsClick(){
     this.props.history.push({
       pathname: '/search'
     });
   }
   handleLoginPopup(){
     alert('aa');
   }
   TEST_handleCreateAdvertPage(){
     this.props.history.push({
       pathname: '/createAdvert'
     });
   }
   TEST_handleGetAdverts(){
     var id = prompt("Enter advert id",'5bdf297bb244a92360687382');
        AdvertAPI.getAdvertById(id,this.props.keycloak.token).then(result =>{
          alert(JSON.stringify(result));
        });

   }
   render(){
  /*   <Button onClick={this.TEST_handleGetAdverts.bind(this)}>AdvertButton</Button>
     <Button onClick={this.TEST_handleCreateAdvertPage.bind(this)}>Create advert page!</Button>*/
    return (
    <div className='fullScreen'>
      <HireHawkLogo image={HireHawkLogoImage} className='mainPage-mainLogo'/>
      <ExternalLoginButton button={{style:{}, className:'mainPage-loginButton'}} style={{zIndex:100}} tokenStyle={{zIndex:100}}/>
      <AdvertSearch className='mainPage-advertSearch' history={this.props.history} > </AdvertSearch>
      <div className='mainPage-imageLinkContainer'>
        <BlockLink name='Give things!' className='mainPage-imageLink' onClick={this.handleGiveThingsClick.bind(this)} backgroundImage={Bike}/>
        <BlockLink name='Take things!' className='mainPage-imageLink' onClick={this.handleTakeThingsClick.bind(this)} backgroundImage={Hat}/>
      </div>
        {/*temporary elements (design/etc)*/}
      {/*<div style = {{position:'absolute', top:'60%', left:0, width:'100%', background:'black', height:'40%', zIndex:-1}}/>
      <div style = {{position:'absolute', bottom:0, left:0, width:'100%', textAlign:'center', height:'8%', color:'white', fontSize:'100%'}}>
      This is a test design with horrible CSS. Do not judge. 13
    </div>*/}
    </div>);
  }
};

const mapStateToProps = (state)=>{
  return {
    keycloak:state.security.keycloak,
    kcAuthenticated:state.security.authenticated,
    kcInitialized:state.security.initialized
  }
}
export default connect(mapStateToProps)(MainPage);
