import React from 'react'
import SimpleComponent from 'components/SimpleComponent'
import MenuAppBar from 'components/common/MenuAppBar'
class WellcomePage extends React.Component{
   constructor(props){
     super(props);
     this.simpleComponentColor= 'lightgreen';
   }
   render(){
     var html=[];
     for(var i =0;i<10;i++) {
         html.push(<SimpleComponent color={this.simpleComponentColor}>Hello developers!</SimpleComponent>);
       }
    return <div><MenuAppBar></MenuAppBar>{html}</div>;
  }

};
export default WellcomePage;
