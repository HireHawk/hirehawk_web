

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
import MessageList from 'containers/chat/MessageList'
import ChatList from 'containers/chat/ChatList'

class ChatPage extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       interlocutor:link.interlocutor,
       loadedMessages:[],
     };
     this.getLastMessages(20);
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
      <div style={{postion:'absolute', height:'60vh',width:'40vw',border:'1px solid black'}}>
        <MessageList/>
      </div>
      <div style={{position:'absolute', left:'50vw',top:'0',height:'60vh',width:'40vw',border:'1px solid black',float:'right'}}>
        <ChatList/>
      </div>

    </div>);
  }
};
export default ChatPage;
