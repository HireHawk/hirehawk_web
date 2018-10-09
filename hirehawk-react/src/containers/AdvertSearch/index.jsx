import React from 'react'

import Input from '@material-ui/core/Input';

import './styles.css'

class AdvertSearch extends React.Component{
   constructor(props){
     super(props);
     this.state={};
   }
   render(){
    return (
    <div style={this.props.style} className ={this.props.className}>
      <input className='centered advertSearch-input' type='search' placeholder='Search for adverts!'></input>
    </div>);
  }

};
export default AdvertSearch;
