
import React from 'react';
import './styles.css'

class LoadingIcon extends React.Component{
  render(){
    return(
  		    <div style={this.props.style} class="loading-dot"></div>
    )
  }
}

export default LoadingIcon;
