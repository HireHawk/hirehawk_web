import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'components/StarRatingComponent'
import Media from 'react-media'
import Feedback from 'components/feedback/Feedback'
import FeedbackList from 'components/feedback/FeedbackList'
import FeedbackInput from 'components/feedback/FeedbackInput'
import FeedbackUtils from 'classes/data/FeedbackUtils'
const styles = {
    root:{
      height:'90%'
    },
    flist:{
      height:'60%'
    }
  };

  class AdvertFeedback extends React.Component{
      constructor(props){
        super(props);
        this.state={
          feedbacks:FeedbackUtils.getTestFeedbacks(),
          inputComment:[],
          inputMark:[],
        }
      }
    handleInputSubmitted(data){
      var feedback = FeedbackUtils.toFeedback(data);
      feedback.dateTime= new Date().toLocaleString();
      this.state.feedbacks.push(feedback);
      this.forceUpdate();
    }
    reverse(arr) {
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          result.push(arr[i]);
        }
        return result;
    }
    render(){
      return (
        <div className={this.props.classes.root+' '+this.props.className} style={this.props.style}>
          <FeedbackList className={this.props.classes.flist} feedbacks = {this.state.feedbacks}>
          </FeedbackList>
          <FeedbackInput
            onSubmit={this.handleInputSubmitted.bind(this)}
            advertId='dummyAdvert'
          />
        </div>
      );
    }
  }

    AdvertFeedback.propTypes = {
      classes: PropTypes.object.isRequired,
    };
/*
this.props.data={
  author:
  comment:
  mark:
  dateTime:
  rentedFrom:
  rentedTo:
  rentedItem:

}

*/
    export default withStyles(styles)(AdvertFeedback);
