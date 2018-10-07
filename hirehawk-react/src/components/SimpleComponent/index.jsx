
import React from 'react'
//import PropTypes from 'prop-types'   //Use PropTypes to make it more debuggable
import './styles.css'

 class SimpleComponent extends React.Component {

  constructor(props){
    super();
  }

  render(){
    return (
      <div className ='SimpleComponent' style={{background:this.props.color}} >
          <h1>{this.props.children}</h1>
      </div>
    );
  }
}

/* // for prop-types
ConfigurationEdior.propTypes = {
  num:PropTypes.number,
  files:arrayOf(propTypes.string),// used to pass mp3 files (links)
  vol:arrayOf(propTypes.number), //limits 0 to 100;
  mute_delayed:arrayOf(propTypes.bool) //if true - unmute on next keypoint. If true -mute;
};
*/

export default SimpleComponent;
