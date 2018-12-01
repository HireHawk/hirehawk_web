

//external dependenciess
import React from 'react'
import qs from 'qs'
//internal dependencies
import 'styles/positioning.css'
import './styles.css'
// test data
import HireHawkLogoImage from 'test/media/images/HireHawkLogoImage.png'
import AdvertList from 'containers/AdvertList'
import Button from '@material-ui/core/Button';
import {adverts} from 'test/data.jsx'
import AdvertAPI from 'api/AdvertAPI'
import SearchAPI from 'api/SearchAPI'
import {connect} from 'react-redux'
import SearchUtils from 'classes/data/SearchUtils'
import Background from 'media/background.png'
import Feedback from 'components/feedback/Feedback'
import FeedbackList from 'components/feedback/FeedbackList'
import FeedbackInput from 'components/feedback/FeedbackInput'
import AdvertFeedbackList from 'components/feedback/AdvertFeedbackList'
import StarRatingComponent from 'components/StarRatingComponent'
class FeedbackTest extends React.Component{
   constructor(props){
     super(props);
     let link = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
     this.state={
     };

   }
   render(){
    return (
    <div className='overflowXHidden fullScreen' style={{background:`url(${Background})`}}>
      <AdvertFeedbackList className='feedbackTest-list' AdvertId='11001010011'/>
    </div>);
  }
};
export default FeedbackTest;
