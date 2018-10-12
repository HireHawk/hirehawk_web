
import React from 'react';

import './styles.css'
class HireHawkLogo extends React.Component{
  render(){
    return(
      <div className={'HireHawkLogo-main '+this.props.className}>
        <img src = {this.props.image} className='HireHawkLogo-image' alt='HireHawk'/>
      </div>
    )
  }
}

export default HireHawkLogo;
