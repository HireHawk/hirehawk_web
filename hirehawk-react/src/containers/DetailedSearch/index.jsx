import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import SearchBar from './main/SearchBar'
import CategoryRow from './main/CategoryRow'
import RentPriceInput from 'components/RentPriceInput'
import DurationInput from 'components/DurationInput'
import Button from '@material-ui/core/Button';
import LocationInput from 'components/LocationInput'
import qs from 'qs'
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
  onCategoryUpdate(newCategory){
    this.props.onChange({
      ...this.props.searchParams,
      category:newCategory,
    })
  }
  onQueryUpdate(newQuery){
    this.props.onChange({
      ...this.props.searchParams,
      query:newQuery,
    })
   //todo
  }
  handleLocationUpdate(newLocation){
    this.props.onChange({
      ...this.props.searchParams,
      location:newLocation
    })
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
  handleMinDurationUpdate(newMinDuration){
    this.props.onChange({
      ...this.props.searchParams,
      minDuration:newMinDuration
    })
  }
  onSearchClicked(evt){
    let params=qs.stringify(this.props.searchParams);
    this.props.history.push({
      pathname: '/search',
      search: params,
      state: { detail:'somedetail' }
    });
    this.props.onSearch(this.props.searchParams);
  }
   render(){
    return (
    <div style={this.props.style} className ={this.props.className+' detailedSearch'}>
      <div id='detailedSearch-2partsContainer'>
        <div className ='detailedSearch-part' id ='detailedSearch-main'>
          <SearchBar value={this.props.searchParams.query} onChange={this.onQueryUpdate.bind(this)}/>
          <Button onClick={this.onSearchClicked.bind(this)}>Search!</Button>

          ... and some search params like full-text search option ...
        </div>
        <div className ='detailedSearch-part' id ='detailedSearch-category'>
          <CategoryRow value = {this.props.searchParams.category} onCategoryUpdate={this.onCategoryUpdate.bind(this)} className='detailedSearch-categoryRow'/>
        </div>
      </div>
      <div id='detailedSearch-2partsContainer'>
        <div className ='detailedSearch-part' id ='detailedSearch-location'>
          <LocationInput value ={this.props.searchParams.location} onChange={this.handleLocationUpdate.bind(this)}></LocationInput>
          here goes location specification
        </div>
        <div className ='detailedSearch-part' id ='detailedSearch-priceTime'>
          <div>
            <RentPriceInput name='Min. Price' className='detailedSearch-price' onChange={this.handleMinPriceUpdate.bind(this)} value={this.props.searchParams.minPrice}/><br/>
            <RentPriceInput name='Max. Price' className='detailedSearch-price' onChange={this.handleMaxPriceUpdate.bind(this)} value={this.props.searchParams.maxPrice}/><br/>
            <DurationInput name='Min. Renting Time' className='detailedSearch-minDuration' onChange={this.handleMinDurationUpdate.bind(this)} value={this.props.searchParams.minDuration}/>

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
