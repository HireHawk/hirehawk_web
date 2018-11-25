import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used


class LocationInput extends React.Component{
    onChange(evt){
      this.props.onChange(evt.target.value);
    }
   render(){
    return (
      <input type='text' placeholder='desired location' value={this.props.value?this.props.value:''} onChange={this.onChange.bind(this)}/>
    );
  }

};
export default LocationInput;
