import React from 'react'
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import {Input} from 'react-chat-elements'
import { Button } from 'react-chat-elements'
import { Dropdown } from 'react-chat-elements'
import './styles.css'
//https://devarchy.com/react/library/react-chat-elements
class CustomMessageList extends React.Component{
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
<Dropdown
    buttonProps={{
        text: 'Dropdown',
    }}
    items={[
        'merhaba',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
    ]}/>
    <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={this.state.messages} />
      <input
            className='messageList-input'
            type='text'
            value={this.state.inputValue}
            onChange={((evt)=>this.handleInputChange.bind(this)(evt)).bind(this)}
            onKeyPress={((evt)=>this.handleInputKeyPress.bind(this)(evt)).bind(this)}
            placeholder="Type here..."
            />
        </div>

    return content;
      //this.refs.input.clear();
  }
}
export default CustomMessageList;
