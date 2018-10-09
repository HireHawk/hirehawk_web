
import React from 'react';
import './styles.css'

class BlockLink extends React.Component{
  render(){
    return(
      <a href='#'>
        <div className='blockLink' style={{...this.props.style, backgroundImage:`url(${this.props.backgroundImage})`, backgroundSize:'cover'}}>
          <div className ='blockLink-text blockLink-text_black unselectable'>
              {this.props.name}
            </div>
          </div>
      </a>
    )
  }
}

export default BlockLink;
