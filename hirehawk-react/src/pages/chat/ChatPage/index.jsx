

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
import ChatComponent from 'containers/chat/ChatComponent'

class ChatPage extends React.Component{

   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       chatId:link.chatid
     };
   }
   getLastMessages(messageNum){

   }
   handleSendMessage(searchParams){

   }
   handleReceiveMessage(searchParams){

   }
   render(){
    return (
    <div className='overflowXHidden'>
      <h1 style={{margin:'0 auto', padding:'30px', display:'block', width:'10em'}}>Chat id: {this.state.chatId}</h1>
      <div style={{postion:'absolute',margin:'0 auto', padding:'30px', height:'60vh',width:'60vw', maxWidth:'800px'}}>
        <ChatComponent chatId={this.state.chatId}/>
      </div>

    </div>);
  }
};
export default ChatPage;
