import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import SearchBar from './main/SearchBar'
import CategoryRow from './main/CategoryRow'
import RentPriceInput from 'components/RentPriceInput'

class AdvertSearch extends React.Component{
   constructor(props){
     super(props);
     this.state={

     };
     //this.props.SearchParams/
     this.refs={
       searchBarRef:React.createRef(),
     }
   }
  onCategoryUpdate(newCategoryId){
    alert('new category ID:'+newCategoryId);
    //todo
  }
  onQueryUpdate(newQuery){
    this.props.onChange({
      ...this.props.searchParams,
      query:newQuery,
    })
   //todo
  }
  handleMinPriceUpdate(newPrice){
    this.props.onChange({
      ...this.props.searchParams,
      minPrice:newPrice,
    })
  }
  handleMaxPriceUpdate(newPrice){
    this.props.onChange({
      ...this.props.searchParams,
      maxPrice:newPrice
    })
  }
   render(){
    return (
    <div style={this.props.style} className ={this.props.className+' detailedSearch'}>
      <div id='detailedSearch-2partsContainer'>
        <div className ='detailedSearch-part' id ='detailedSearch-main'>
          <SearchBar value={this.props.searchParams.query} onChange={this.onQueryUpdate.bind(this)}/>
          ... and some search params like full-text search option ...
        </div>
        <div className ='detailedSearch-part' id ='detailedSearch-category'>
          <CategoryRow onCategoryUpdate={this.onCategoryUpdate.bind(this)} className='detailedSearch-categoryRow'/>
        </div>
      </div>
      <div id='detailedSearch-2partsContainer'>
        <div className ='detailedSearch-part' id ='detailedSearch-location'>
          here goes location specification
        </div>
        <div className ='detailedSearch-part' id ='detailedSearch-priceTime'>
          <div>
            <RentPriceInput name='Min. Price' className='detailedSearch-minPrice' onChange={this.handleMinPriceUpdate.bind(this)} value={this.props.searchParams.minPrice}/><br/>
            <RentPriceInput name='Max. Price' className='detailedSearch-maxPrice' onChange={this.handleMaxPriceUpdate.bind(this)} value={this.props.searchParams.maxPrice}/>
          </div>
          here goes price specification, minimum time to rent, desired renting time period specification specification
        </div>
      </div>
      <div className ='detailedSearch-part' id ='detailedSearch-categorySpecific'>
        Here you will find category-specific things.
      </div>
    </div>);
  }

};
export default AdvertSearch;
