import React from 'react'

//external dependencies
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
//internal dependencies
import BlockLink from 'components/BlockLink';
import HireHawkLogo from 'components/HireHawkLogo';
import LoginButton from 'containers/LoginButton';
import AdvertSearch from 'containers/AdvertSearch';
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
   render(){
    return (
    <div className='fullScreen'>
      <HireHawkLogo image={HireHawkLogoImage} className='mainLogo'/>
      <LoginButton button={{style:{}, className:'loginButton'}}/>
      <AdvertSearch className='advertSearch' > </AdvertSearch>
      <div className='imageLinkContainer'>
        <BlockLink name='Give things!' className='imageLink' onClick={this.handleGiveThingsClick} backgroundImage={Bike}/>
        <BlockLink name='Take things!' className='imageLink' onClick={this.handleGiveThingsClick} backgroundImage={Hat}/>
      </div>
        {/*temporary elements (design/etc)*/}
      <div style = {{position:'absolute', top:'60%', left:0, width:'100%', background:'black', height:'40%', zIndex:-1}}/>
      <div style = {{position:'absolute', bottom:0, left:0, width:'100%', textAlign:'center', height:'8%', color:'white', fontSize:'100%'}}>This is a test design with horrible CSS. Do not judge.</div>
      <Link to='/wellcome'><Button style={{float:'right'}}>Go To Wellcome page!</Button></Link>
    </div>);
  }
};
export default MainPage;
