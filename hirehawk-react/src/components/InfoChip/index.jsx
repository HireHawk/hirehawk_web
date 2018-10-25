import React from 'react';

import 'styles/positioning.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
  },
  infoChip_minimized:{
    width:'5em',
    height:'5em',
    border:'1px solid grey',
    backgroundColor:'red'
  }
})
class InfoChip extends React.Component{
  constructor(props){
    super();
    this.state={
      minimized:props.minimized,
    }
  }
  renderMinimized(){
    let icon;
    let color='black';
    let borderColor='black';
    let backgroundColor='grey';
    switch(this.props.type) {
      case 'confirmation':
          borderColor = 'green';
          backgroundColor='lightgreen';
          break;
      case 'attention':
          borderColor = 'yellow';
          backgroundColor='white';
          break;
      case 'error':
          borderColor = 'red';
          backgroundColor='lightred';
          break;
    }
    return (
      <div className={this.props.classes.infoChip_minimized} style={{color:color, borderColor:borderColor, backgroundColor:backgroundColor}}>
       !
      </div>

      );
  }
  render(){
      if(this.props.minimized){
        return this.renderMinimized();
      }else{
        return (
          <div className={{}}>

                    <Chip
                      style={{maxWidth:'1em',overflow:'hidden'}}
                      clickable
                      label={this.props.info}
                      className={this.props.classes.chip}
                      color="primary"
                      variant="outlined"
                      onClick={this.props.onClick}
                      />
         </div>
        )
      }
    }
  }

InfoChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoChip);
