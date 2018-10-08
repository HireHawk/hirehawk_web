
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
import Image from 'media/images/testImage.JPG'
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function AdvertCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Skates: 100UAH/DAY"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Slightly used skates.
          </Typography>
          <Typography component="p">
            {'************* model, sharp blades. My phone: 057-237-42-43'}
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
        <Button size="small" variant="outlined" className={classes.button}>
          100UAH/day
        </Button>
      </CardActions>
    </Card>
  );
}

AdvertCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvertCard);
