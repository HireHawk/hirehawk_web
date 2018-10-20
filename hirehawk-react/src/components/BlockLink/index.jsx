
import React from 'react';
import './styles.css'
import 'styles/positioning.css'
class BlockLink extends React.Component{
  render(){
    return(
      <a href={this.props.link}>
        <div className={'blockLink '+this.props.className} style={{...this.props.style, backgroundImage:`url(${this.props.backgroundImage})`, backgroundSize:'cover'}}>
          <div className='blockLink-text blockLink-text_black unselectable'>
              {this.props.name}
            </div>
          </div>
      </a>
    )
  }
}

export default BlockLink;
