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

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="inherit" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            props.data.description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

  );
}
{/*  <Card className={classes.card}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={props.data.picture}
      title={props.data.description}
      />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {props.data.name}
      </Typography>
      <Typography component="p">
        {props.data.desctiption}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      I am interested!
    </Button>
    <Button size="small" color="primary">
      Details
    </Button>
  }<Button size="small" variant="outlined" className={classes.button}>
      {props.data.price}/{props.data.timePeriod}
    </Button>
  </CardActions>
</Card>*/}


MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
