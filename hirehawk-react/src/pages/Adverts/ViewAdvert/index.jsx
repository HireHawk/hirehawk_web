

//external dependenciess
import React from 'react'
import qs from 'qs'
//internal dependencies
import HireHawkLogo from 'components/HireHawkLogo';
import AdvertSearch from 'containers/AdvertSearch';
import './styles.css'
import 'styles/positioning.css'
// test data
import HireHawkLogoImage from 'test/media/images/HireHawkLogoImage.png'
import AdvertList from 'containers/AdvertList'
import Button from '@material-ui/core/Button';
import DetailedSearch from 'containers/DetailedSearch'
import {adverts} from 'test/data.jsx'
import AdvertAPI from 'api/AdvertAPI'
import SearchAPI from 'api/SearchAPI'
import {connect} from 'react-redux'
import SearchUtils from 'classes/data/SearchUtils'
import Background from 'media/background.png'
import FullAdvert from 'containers/FullAdvert'

class ViewAdvert extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
       advertId:link.id,
     };
   }


   render(){
    return (
    <div className='overflowXHidden viewAdvert' style={{background:`url(${Background})`}}>
      <FullAdvert className= 'viewAdvert-fullAdvert' id={this.state.advertId}/>
    </div>);
  }
};
export default ViewAdvert;
