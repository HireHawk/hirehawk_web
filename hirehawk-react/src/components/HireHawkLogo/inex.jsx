
import React from 'react';
import './styles.css'

class HireHawkLogo extends React.Component{
  render(){
    return(
      <div className='HireHawkMainLogo-main'>
        <img src = {this.props.image} className='HireHawkMainLogo-image' alt='HireHawk'/>
      </div>
    )
  }
}

export default HireHawkLogo;
