

//external dependenciess
import React from 'react'
//internal dependencies
import ImageLoader from 'components/ImageLoader'
// props and styles
import './styles.css'
import 'styles/positioning.css'
// test data

class PictureUploadTest extends React.Component{
   constructor(props){
     super(props);
     this.state={
       imageLinks:[],
     };
   }
   handleGiveThingsClick(){

   }
   handleAddImageLink(link){
     this.setState({
       imageLinks:this.state.imageLinks.concat([link])
     });
   }
   handleRemoveImageLink(link){
     var index = this.state.imageLinks.indexOf(link);
     if (index !== -1) this.state.imageLinks.splice(index, 1);
     alert(this.state.imageLinks+'\n'+link);
     this.forceUpdate();
   }
   render(){
    return (
      <ImageLoader classNameClosed='pictureUploadTest-imageLoader'
                   classNameOpened='pictureUploadTest-imageLoaderOpened'
                   imageLinks={this.state.imageLinks}
                    onUploaded={this.handleAddImageLink.bind(this)}
                    onRemoved={this.handleRemoveImageLink.bind(this)}></ImageLoader>
    );
  }
};
export default PictureUploadTest;
