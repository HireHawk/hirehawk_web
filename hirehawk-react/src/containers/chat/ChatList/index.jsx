import React from 'react'
import 'react-chat-elements/dist/main.css';
import { ChatList} from 'react-chat-elements'

//https://devarchy.com/react/library/react-chat-elements
class CustomChatList extends React.Component{
  constructor(props){
    super(props);
    this.inputRef=React.createRef();
    this.state={

      messages:[
          {
              position: 'right',
              type: 'text',
              text: 'Example message',
              date: new Date(),
          },
      ],
      inputValue:''
    }
  }
  handleInputChange(evt){
    this.setState({
      inputValue:evt.target.value
    })

  }
  handleInputKeyPress(evt){
    if(evt.key==='Enter'){
      this.state.messages.push({
        position:'right',
        type: 'text',
        text:evt.target.value,
        date:new Date(),
      });
      this.setState({
        inputValue:''
      });
    }
  }
  render(){
    let content = <div>
        <ChatList
          className='chat-list'
          dataSource={[
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'usver',
              title: 'Buyer',
              subtitle: 'here is my last message',
              date: new Date(),
              unread: 1,
              
            },
          ]} />
        </div>
    return content;
      //this.refs.input.clear();
  }
}
export default CustomChatList;
