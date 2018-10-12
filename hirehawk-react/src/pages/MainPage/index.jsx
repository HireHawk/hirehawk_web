import React from 'react'

//external dependencies
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
//internal dependencies
import BlockLink from 'components/BlockLink'
import OtherSimple from 'components/OtherSimple'
import LoginButton from 'containers/LoginButton'
import AdvertSearch from 'containers/AdvertSearch'
// props and styles
import './styles.css'
// test data
import Bike from 'test/media/images/bike.jpeg'
import Hat from 'test/media/images/hat.jpeg'

class MainPage extends React.Component{
   constructor(props){
     super(props);
     this.state={};
   }
   handleGiveThingsClick(){

   }
   handleLoginPopup(){
     alert('aa');
     //<HireHawkLogo image={Hat}/>
   }
   render(){
    return (
    <div>

      <LoginButton button={{style:{}, className:'loginButton'}}/>
      <AdvertSearch className ='advertSearch' > </AdvertSearch>
      <BlockLink name = 'Give things!' onClick={this.handleGiveThingsClick} backgroundImage={Bike} style ={{position:'absolute',top:'40%',left:0,width:'50%',height:'40%',margin:'1px'}}/>
      <BlockLink name = 'Take things!' onClick={this.handleGiveThingsClick} backgroundImage={Hat} style ={{position:'absolute',top:'40%',left:'50%',width:'50%',height:'40%',margin:'1px'}}/>

      {/*toChange*/}
      <Link to="/wellcome"><Button style={{float:'right'}}>Go To Wellcome page!</Button></Link>
    </div>);
  }
};
export default MainPage;
