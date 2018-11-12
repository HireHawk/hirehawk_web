import React from 'react';

import 'styles/positioning.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import tranSquare from './tranSquareAdd.png'
import Dropzone from 'react-dropzone'
const styles = theme => ({
  container:{
    position:'relative',
    background:'black',
    height:'500px',
    boxShadow:'inset 0 0 20px 20px white',
    display:'inline-block',
    padding:'10px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
},
image:{
  display:'block',
  height:'100%',
  maxWidth:'100%',
},
text:{
    position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
}
});
class AddImage extends React.Component{
  constructor(props){
    super();
    //this.props.imageLink
    //this.props.error;
  }


  render(){

    return(
      <Dropzone
        accept="image/*"
        onDrop={this.props.handleDrop}
        className={[this.props.classes.container,this.props.className].join(' ')}
        >
          <img className={this.props.classes.image} alt='tr' src={tranSquare}/>
      </Dropzone>
    )
  }
}

AddImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddImage);
