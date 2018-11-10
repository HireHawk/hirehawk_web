
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



  class AdvertList extends React.Component{
    render(){
      var {classes} = this.props;
      var adverts=[];

      return (
          <div className={this.props.className}>
              hello
          </div>
      );
    }
  }

    AdvertList.propTypes = {
      adverts: PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired,
    };

    export default (AdvertList);
