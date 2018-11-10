import React from 'react'
import Button from '@material-ui/core/Button';

// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'

class AdvertSearch extends React.Component{
   constructor(props){
     super(props);
     this.state={
       inputPlaceholder:'A   Search for adverts!'
     };
   }
   handleResize(){

     if(window.innerWidth < 400){
       this.setState({inputPlaceholder:'Search!'});
     } else {
        this.setState({inputPlaceholder:'        Search for adverts!'});
     }
   }
   componentWillMount(){
    this.handleResize(()=>window.innerHeight,()=>window.innerWidth);
  }
  componentDidMount(){
      window.addEventListener("resize", this.handleResize.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
  }
   render(){
    return (

    <div style={this.props.style} className ={this.props.className+' advertSearch'}>
      <input className='advertSearch-input' type='search' placeholder={this.state.inputPlaceholder}/>
      <input type='button' className='advertSearch-button' value='search!'/>
    </div>);
  }

};
export default AdvertSearch;
