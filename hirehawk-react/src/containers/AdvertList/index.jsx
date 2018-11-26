
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import AdvertCard from 'components/AdvertCard'


  class AdvertList extends React.Component{
    render(){
      return (
          <div className={['advertList',this.props.className].join(' ')}>
               {this.props.adverts.map((e)=>{
                 return (
                   <AdvertCard style={{display:'inline-block',width:'100vw', margin:'15px'}} key ={e.name} data = {e}>
                   </AdvertCard>
                 );}
               )}
            
          </div>
      );
    }
  }

    AdvertList.propTypes = {
      adverts: PropTypes.object.isRequired,
    };

    export default (AdvertList);
