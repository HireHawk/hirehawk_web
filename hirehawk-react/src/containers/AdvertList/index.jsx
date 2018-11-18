
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'



  class AdvertList extends React.Component{
    render(){
      var adverts=[];
      return (
          <div className={['advertList',this.props.className].join(' ')}>
               dummyAdvert
                {adverts}
          </div>
      );
    }
  }

    AdvertList.propTypes = {
      adverts: PropTypes.object.isRequired,
    };

    export default (AdvertList);
