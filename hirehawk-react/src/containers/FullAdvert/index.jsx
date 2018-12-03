import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'components/StarRatingComponent'
import Media from 'react-media'
import FeedbackUtils from 'classes/data/FeedbackUtils'
import AdvertFeedback from 'components/feedback/AdvertFeedback'

import 'styles/positioning.css'
import AdvertAPI from 'api/AdvertAPI'
import UserAPI from 'api/UserAPI'

const styles = {
    root:{
    },
    advertFeedback:{
      width:'80%',
      background:'grey',
      /*border:'1px solid grey',*/
      /*boxShadow:'inset 0px 0px 3px 3px white'*/
      margin:'0 auto',
      marginBottom:'10px',
      borderTopLeftRadius:'10px',
      borderTopRightRadius:'10px',
      overflow:'hidden',
    },
    advertFeedbackList:{
      maxHeight:'500px',
    },
    content:{
      padding:'10px',
    }
  };

  class FullAdvert extends React.Component{
      constructor(props){
        super(props);
        this.state={
          advert:undefined,
          author:{
            keycloak:undefined,
            additional:undefined
          }
        }
        this.getAdvertByID(this.props.id);
      }
      getUserById(id){
         UserAPI.getKeycloakUserInfo(id).then(result =>{
           this.setState({
              author:{
                ...this.state.author,
                keycloak:result,
              }
           });
         });
         UserAPI.getAdditionalUserInfo(id).then(result =>{
           this.setState({
              author:{
                ...this.state.author,
                additional:result,
              }
           });
          });
      }
      getAdvertByID(id){
          AdvertAPI.getAdvertById(id).then(result =>{
             this.setState({
                advert:result,
             });
             this.getUserById(result.usersId);
           });
      }
    render(){
      let contents = 'wait for it...';

      if(this.state.advert){
        contents = (
          <div className={this.props.classes.content}>
            <h2 style={{padding:'30px'}}>Demo Advert</h2>
            <div>
              Name: {this.state.advert.name}
            </div>
            <div>
              Info: {this.state.advert.info}
            </div>
            <div>
              Photos: {this.state.advert.photo}
              <p style={{color:'red',backgrondColor:'black'}}>Use my component to add photos as strings and join them to one</p>
            </div>
            <div style={{color:'blue'}}>
              Author (user_s_Id, really?): {this.state.author.keycloak?(this.state.author.keycloak.firstName+' '+this.state.author.keycloak.lastName):'loading'}
              <div>
                photo url: {this.state.author.additional?(this.state.author.additional.photo):'loading...'}
              </div>
            </div>
            <div>
              Category: {this.state.advert.category}
            </div>
            <div>
              Location: {this.state.advert.location}
            </div>
            <div>
              Price : {this.state.advert.price}/hour
              <br/>
              <span style={{color:'red'}}>need to add currency (12uah for ex) </span>
            </div>

            <div>
              minimum renting time: {this.state.advert.num_of_hours}
            </div>
            <div>
              creation date: {(new Date(this.state.advert.date)).toLocaleString()}
            </div>
            <p style={{color:'red',backgrondColor:'black'}}>Also advert creation date is somehow null</p>
            <AdvertFeedback
               caption = 'feedback'
               className ={this.props.classes.advertFeedback}
               listClassName={this.props.classes.advertFeedbackList}
               advertId ={this.props.id}
               userId = {this.state.author.keycloak?this.state.author.keycloak.id:undefined}
               userRole = 'GIVER'/>
          </div>
        )
      }
      return (
        <div className={this.props.classes.root+' '+this.props.className} style={this.props.style}>
          <Paper>
            {contents}
          </Paper>
        </div>
      );
    }
  }

    FullAdvert.propTypes = {
      classes: PropTypes.object.isRequired,
    };
/*
this.props.id
*/

    export default withStyles(styles)(FullAdvert);
