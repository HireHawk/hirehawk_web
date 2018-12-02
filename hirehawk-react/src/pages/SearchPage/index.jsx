

//external dependenciess
import React from 'react'
import qs from 'qs'
//internal dependencies
import AdvertSearch from 'containers/AdvertSearch';
import './styles.css'
import 'styles/positioning.css'
// test data
import AdvertList from 'containers/AdvertList'
import Button from '@material-ui/core/Button';
import DetailedSearch from 'containers/DetailedSearch'
import {adverts} from 'test/data.jsx'
import AdvertAPI from 'api/AdvertAPI'
import SearchAPI from 'api/SearchAPI'
import {connect} from 'react-redux'
import SearchUtils from 'classes/data/SearchUtils'
import Background from 'media/background.png'
class SearchPage extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       searchParams:SearchUtils.toSearchParams(link),
       advertIDs:[],
       adverts:[],
     };
     this.handleSearch(this.state.searchParams);
   }
   getAdvertsByIDs(ids){
     for(let id of ids){
       AdvertAPI.getAdvertById(id).then(result =>{
         this.state.adverts.push(result);
         this.forceUpdate();
       })
     }/*
     AdvertAPI.getAdvertsByIdList(ids).then(result =>{
                this.setState({
                  adverts:result,
                });
            });*/
   }
   handleSearch(searchParams){
     //getLinks (search API);
     SearchAPI.searchAdverts(this.state.searchParams).then((ids)=>{
       this.setState({
         advertIDs:ids,
         adverts:[]
       });
    this.getAdvertsByIDs(ids);
    });
   }
   handleSearchParamsChange(searchParams){
     this.setState({
       searchParams:searchParams,
     });
   }
   render(){
    return (
    <div className='overflowXHidden searchPage' style={{background:`url(${Background})`}}>
      <DetailedSearch onSearch={this.handleSearch.bind(this)}
                      onChange={this.handleSearchParamsChange.bind(this)}
                      searchParams={this.state.searchParams}
                      className='searchPage-detailedSearch'
                      adverts={undefined}
                      history={this.props.history}
              />
            <AdvertList className='searchPage-advertList'
              adverts ={this.state.adverts}
              history={this.props.history}></AdvertList>
    </div>);
  }
};
export default SearchPage;
