import React from 'react';

import 'styles/positioning.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import request from 'superagent';
import Dropzone from 'react-dropzone'
import Image from './Image'
import AddImage from './AddImage'
import './styles.css'

/* used tutorial from https://css-tricks.com/image-upload-manipulation-react/*/
const CLOUDINARY_UPLOAD_PRESET = 'advertImages';
const CLOUDINARY_UPLOAD_URL='https://api.cloudinary.com/v1_1/yreppils/upload'

const styles = theme => ({
  root:{
    position:'absolute',
    overflow:'hidden',
    height:'1000px',
  },
  imageLoader:{
    overflowX:'auto',
    border:'2px dashed black',
    whiteSpace:'nowrap',
    height:'calc(100% - 4px)',
    width:'calc(100% - 4px)',
  },
  image:{
    height:'100%',
    display:'inline-block',
  },
  addimage:{
  },
  container:{
    position:'absolute',
    top:'10%',
    left:'0',
    textAlign:'center',
    maxWidth:'1000%',
    height:'80%',
    whiteSpace: 'nowrap',
    right:0,
  }
})

class ImageLoader extends React.Component{
  constructor(props){
    super();
    //this.props.onUploaded(link) must be defined
    //this.props.onRemoved(link) must be defined
    //this.props.imageLinks must be an array with links of already uploaded images.
  }
  handleDrop(files){
    console.log('received images');
    this.handleImageUpload(files[0]);

  }
  handleRemove(link){
    this.props.onRemoved(link);
  }
  handleImageUpload(file) {
   let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (err) {
       console.error(err);
     }
     if (response.body.secure_url !== '') {
       this.props.onUploaded(response.body.secure_url);
     }
   });
 }

  render(){
    let contents = [];
    for(let i of this.props.imageLinks){
      contents.push(<Image key={i} className={this.props.classes.image} imageLink={i} onRemoved={this.handleRemove.bind(this)}/> )
    }
    if(contents.length === 0)
         contents.push(<p key='addFirst'>Click or drop files here!</p>)
    else contents.push(<AddImage className={this.props.classes.image} onDrop={this.handleDrop.bind(this)}></AddImage>)

    return (
      <div className={this.props.imageLinks.length>0?this.props.classNameOpened:this.props.classNameClosed}>
        <Dropzone
          disableClick = {this.props.imageLinks.length>0}
          accept="image/*"
          onDrop={this.handleDrop.bind(this)}
          className={this.props.classes.imageLoader}
          >
          <div className={this.props.classes.container}>
            {contents}
          </div>
        </Dropzone>
      </div>

)

  }
}

ImageLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageLoader);
