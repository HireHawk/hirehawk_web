
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'



  class AdvertList extends React.Component{
    render(){
      var adverts=[];
      return (
          <div className={this.props.className}>
              hello {adverts}
          </div>
      );
    }
  }

    AdvertList.propTypes = {
      adverts: PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired,
    };

    export default (AdvertList);
