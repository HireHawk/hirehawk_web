
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.css'
import qs from 'qs'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
      height: '100%',
    },
  };
  class AdvertCard extends React.Component{
    handleAdvertDetailsClicked(evt){
      let params=qs.stringify({id:this.props.data.id})
       this.props.history.push({
         pathname: '/advert',
         search: params,
         state: {}
       });
    }
    render(){
      var {classes} = this.props;
      return (
        <Card className={classes.card} style={{...{margin:'15px'}, ...this.props.style}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.data.picture}
              title={this.props.data.info}
              />
            <CardContent>
              <Typography gutterBottom variant='inherit' component="h2">
                {this.props.data.name}
              </Typography>
              <Typography component="p">
                {this.props.data.info}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              I am interested!
            </Button>
            <Button size="small" color="primary" onClick = {this.handleAdvertDetailsClicked.bind(this)}>
              Details
            </Button>
            <Button size="small" variant="outlined" className={classes.button}>
              {this.props.data.price}/{this.props.data.timePeriod}
            </Button>
          </CardActions>
        </Card>
      );
    }
  }

    AdvertCard.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(AdvertCard);
