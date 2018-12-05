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
import ImageLoader from 'components/ImageLoader'
import ImageLoaderImage from 'components/ImageLoader/Image'
import 'styles/positioning.css'
import AdvertAPI from 'api/AdvertAPI'
import UserAPI from 'api/UserAPI'

const styles = {
    root:{
    },
    advertFeedback:{
      width:'80%',
      background:'lightgrey',
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
      paddingTop:'40px',
    },
    content:{
      padding:'10px',
    },
    imageLinks:{
      height:'200px'
    },
    authorPhoto:{
      height:'200px',
      display:'inline-block',
    },
    info:{
      marginBottom:'20px',
      marginTop:'10px'
    },
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
            <h2 style={{padding:'30px'}}>{this.state.advert.name}</h2>
            <div>
              <span className={this.props.classes.info} style={{color:'grey'}}>Info:</span> {this.state.advert.info}
            </div>
            <div>
              {this.state.advert.imageLinks?<span style={{color:'grey'}}>Photos:</span>:''}
              {this.state.advert.imageLinks?<ImageLoader readOnly={true} imageLinks={this.state.advert.imageLinks} className={this.props.classes.imageLinks}/>:''}
            </div>
            {/*
              <div>
                <span style={{color:'grey'}}>Main Photo:</span> {this.state.advert.mainLink}
              </div>
            */}
            <div style={{color:'blue'}}>
              <div>
               <br/> {this.state.author.additional?this.state.author.additional.photo?(
                <ImageLoaderImage className ={this.props.classes.authorPhoto} viewOnly={true} imageLink={[this.state.author.additional.photo]}/>
              ):'':''}
              </div>
              <span style={{color:'grey'}}>Author:</span> {this.state.author.keycloak?(this.state.author.keycloak.firstName+' '+this.state.author.keycloak.lastName):'loading'}

            </div>
            <div>
              <span style={{color:'grey'}}>Category:</span> {this.state.advert.category?this.state.advert.category:'-'}
            </div>
            <div>
              <span style={{color:'grey'}}>Location:</span> {this.state.advert.location?this.state.advert.location:'-'}
            </div>
            <div>
              <span style={{color:'grey'}}>Price:</span> {this.state.advert.price+' '+ (this.state.advert.currency?this.state.advert.currency:'acp')}/day
              <br/>
            </div>

            <div>
               <span style={{color:'grey'}}>Minimum renting time:</span>  {((this.state.advert.numb_of_hours>=24)?Math.floor(this.state.advert.numb_of_hours/24)+((this.state.advert.numb_of_hours>=48)?' days ':' day '):'')+(this.state.advert.numb_of_hours%24?this.state.advert.numb_of_hours%24+' hours.':'')}

            </div>
            <div>
              <span style={{color:'grey'}}>Creation date: </span> {(new Date(this.state.advert.date)).toLocaleString()}
            </div>
          <br/>
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
