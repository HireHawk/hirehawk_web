import React from 'react'

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AdvertSearch from 'containers/AdvertSearch'
import {Link} from 'react-router-dom'
import BlockLink from 'components/BlockLink'
import Bike from 'test/media/images/bike.jpeg'
import Hat from 'test/media/images/hat.jpeg'
import './styles.css'

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
    <div>
      <button onClick ={this.handleLoginPopup} className='loginButton unselectable'>Login/Register</button>
      <AdvertSearch className ='advertSearch' > </AdvertSearch>
      <BlockLink name = 'Give things!' onClick={this.handleGiveThingsClick} backgroundImage={Bike} style ={{position:'absolute',top:'40%',left:0,width:'50%',height:'40%',margin:'1px'}}/>
      <BlockLink name = 'Take things!' onClick={this.handleGiveThingsClick} backgroundImage={Hat} style ={{position:'absolute',top:'40%',left:'50%',width:'50%',height:'40%',margin:'1px'}}/>

      {/*toChange*/}
      <Link to="/wellcome"><Button style={{float:'right'}}>Go To Wellcome page!</Button></Link>
    </div>);
  }
};
export default MainPage;
