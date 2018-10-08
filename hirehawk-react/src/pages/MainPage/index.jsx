import React from 'react'
import SimpleComponent from 'components/SimpleComponent'
import MenuAppBar from 'components/common/MenuAppBar'
import AdvertCard from 'components/AdvertCard'
class WellcomePage extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
    return <div><MenuAppBar></MenuAppBar> <AdvertCard></AdvertCard></div>;
  }

};
export default WellcomePage;
