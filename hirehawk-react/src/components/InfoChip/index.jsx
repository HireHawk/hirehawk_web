import React from 'react';

import 'styles/positioning.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
  },
  infoChip:{
    width:'1.2em',
    height:'1.2em',
    borderRadius:'0.6em',
    border:'3px solid lightred',
    backgroundColor:'red',
    textAlign:'center',
    verticalAlign:'middle',
  },
  infoChip_squared:{
    borderRadius:'2px'
  }
})
class InfoChip extends React.Component{
  constructor(props){
    super();
    this.state={
      minimized:props.minimized,
    }
  }
  showInfo(){
    if (this.props.showAlert===true){
      alert(this.props.info);
    }else{
      if(this.props.onMaximize)this.props.onMaximize();
      this.setState({
        minimized:false,
      });
    }
  }
  hideInfo(){
    if(this.props.onMinimize)this.props.onMinimize();
   this.setState({
     minimized:true,
   });
  }

  render(){
    let content ='';
    let classes =[];
    let styles ={color:'black',borderColor:'black',backgroundColor:'grey'};
    let onclick;
    switch(this.props.type) {
      case 'confirmation':
          styles.borderColor = 'green';
          styles.backgroundColor='lightgreen';
          content =':)';
          break;
      case 'attention':
          styles.borderColor = 'yellow';
          styles.backgroundColor='white';
          content=':|';
          break;
      case 'error':
          styles.borderColor = 'red';
          styles.backgroundColor='lightred';
          content=':(';
          break;
      default:
          styles.borderColor = 'black';
          styles.backgroundColor='grey';
    }
    classes.push(this.props.classes.infoChip_minimized);
    classes.push(this.props.classes.infoChip);
    if(this.props.squared)classes.push(this.props.classes.infoChip_squared);
    if(this.state.minimized){
        classes.push('unselectable');
        styles.width='1.2em';
        onclick=this.showInfo.bind(this);
        styles.fontSize=this.props.size;
      }else{
        content=this.props.info;
        onclick=this.hideInfo.bind(this);
        styles.width=this.props.fullWidth;
        styles.fontSize='1em'
      }
      return (
        <div onClick ={onclick} className={classes.join(' ')} style={Object.assign(styles, this.props.style)}>
         {content}
        </div>
      )
    }
  }


//minimized - only on creation
//visible - can be changed

InfoChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoChip);
