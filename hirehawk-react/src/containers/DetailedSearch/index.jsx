import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import SearchBar from './main/SearchBar'
import CategoryRow from './main/CategoryRow'

class AdvertSearch extends React.Component{
   constructor(props){
     super(props);
     this.state={
       inputPlaceholder:'A   Search for adverts!'
     };
     this.refs={
       searchBarRef:React.createRef(),
     }
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
  onCategoryUpdate(newCategoryId){
    alert('new category ID:'+newCategoryId);
    //todo
  }
   render(){
    return (
    <div style={this.props.style} className ={this.props.className+' detailedSearch'}>
      <div className ='detailedSearch-part' id ='detailedSearch-main'>
        <SearchBar inputRef={this.refs.searchBarRef}/>
        ... and some search params like full-text search option ...
      </div>
      <div id='detailedSearch-categoryLocationContainer'>
        <div className ='detailedSearch-part' id ='detailedSearch-category'>
          <CategoryRow onCategoryUpdate={this.onCategoryUpdate.bind(this)} className='detailedSearch-categoryRow'/>
        </div>
        <div className ='detailedSearch-part' id ='detailedSearch-location'>
          here goes location specification
        </div>
      </div>
      <div className ='detailedSearch-part' id ='detailedSearch-priceTime'>
        here goes price specification, minimum time to rent, desired renting time period specification specification
      </div>
      <div className ='detailedSearch-part' id ='detailedSearch-categorySpecific'>
        Here you will find category-specific things.
      </div>
    </div>);
  }

};
export default AdvertSearch;
