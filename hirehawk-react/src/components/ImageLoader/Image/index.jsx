import React from 'react';

import 'styles/positioning.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    overflow:'hidden',
    margin:'0',
    padding:'0',
  },
  image:{
    height:'100%',
  },
  imageContainer:{
    position:'relative',
    border:'4px dashed green',
    borderRadius:'10px',
    display:'block',
    marginLeft:'10px',
    height:'calc(100% - 8px)',
    backgroundColor:'black',
    overflow:'hidden',
  },
  delete:{
    border:'0px',
    position:'absolute',
    top:0,
    left:0,
    borderBottomRightRadius:'10px',
    boxShadow:'5px 5px 2px 2px',
    textAlign:'center',
    verticalAlign:'middle',
    background: 'red',
    padding:'10px',
  },
  makePrimary:{
    border:'0px',
    position:'absolute',

    borderRadius:'50%',
    textAlign:'center',
    verticalAlign:'middle',
    padding:'10px',
  },
  makePrimaryChosen:{
    top:'calc(50% - 35px)',
    left:'calc(50% - 35px)',
    height:'70px',
    width:'70px',
    background: 'rgba(100,255,100,0.9)'
  },
  makePrimaryNotChosen:{
    top:'calc(50% - 25px)',
    left:'calc(50% - 25px)',
    height:'50px',
    width:'50px',
    background: 'rgba(100,255,100,0.2)'
  }
});
class Image extends React.Component{
  constructor(props){
    super();
    //this.props.imageLink
    //this.props.error;
  }


  render(){
    var contents;
    if (this.props.error){
     contents = <p> {this.props.error}</p>;
    }else if (this.props.imageLink){
     contents = <div className={this.props.classes.imageContainer} styles={{display:'inlineBlock'}}>
     <img alt={this.props.imageLink} src={this.props.imageLink} className={this.props.classes.image}/>
     <input type='button' className={this.props.classes.delete} value='Delete!' onClick={()=>this.props.onRemoved(this.props.imageLink)}/>
     <input type='button' className={[this.props.classes.makePrimary,(this.props.chosen?this.props.classes.makePrimaryChosen:this.props.classes.makePrimaryNotChosen)].join(' ')} value='' onClick={()=>this.props.onChosen(this.props.imageLink)}/>
     </div>
    }else{
       contents = <p>Loading...</p>;
    }
    return(
      <div className={[this.props.className,this.props.classes.root].join(' ')}>
          {contents}
      </div>
    )
  }
}

Image.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Image);
