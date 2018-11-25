
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import AdvertCard from 'components/AdvertCard'


  class AdvertList extends React.Component{
    render(){
      return (
          <div className={['advertList',this.props.className].join(' ')}>
            <div style={{margin:'0 auto'}}>
               {this.props.adverts.map((e)=>{
                 return (
                   <AdvertCard style={{display:'inline-block',width:'100vw', margin:'15px auto'}} key ={e.name} data = {e}>
                   </AdvertCard>
                 );}
               )}
               }
             </div>
          </div>
      );
    }
  }

    AdvertList.propTypes = {
      adverts: PropTypes.object.isRequired,
    };

    export default (AdvertList);
