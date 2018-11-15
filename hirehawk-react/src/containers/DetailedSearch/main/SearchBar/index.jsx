import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import qs from 'qs'
class SearchBar extends React.Component{
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
  handleSearch(){
   let params=qs.stringify({query:this.inputRef.current.value})

    this.props.history.push({
      pathname: '/search',
      search: params,
      state: { detail:'somedetail' }
    });
  }
   render(){
    return (

    <div style={this.props.style} className ={this.props.className+' searchBar'}>
      <input ref={this.props.inputRef} className='searchBar-input' type='search' placeholder={this.state.inputPlaceholder}/>
    </div>);
  }

};
export default SearchBar;
