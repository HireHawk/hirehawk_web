import React from 'react'

// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'

class AdvertSearch extends React.Component{
   constructor(props){
     super(props);
     this.state={
       inputPlaceholder:'Search for adverts!'
     };
   }
   handleResize(){

     if(window.innerWidth < 400){
       this.setState({inputPlaceholder:'Search!'});
     } else {
        this.setState({inputPlaceholder:'Search for adverts!'});
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

    <div style={this.props.style} className ={this.props.className}>
      <input className='centered advertSearch-input' type='search' placeholder={this.state.inputPlaceholder}/>
    </div>);
  }

};
export default AdvertSearch;
