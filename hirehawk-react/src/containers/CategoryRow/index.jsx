
import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import NestedDropdown from './NestedDropdown'
import qs from 'qs'
import AdvertAPI from 'api/AdvertAPI'
import AdvertUtils from 'classes/data/AdvertUtils'
class CategorySelect extends React.Component{
   constructor(props){
     super(props);
     this.state={
       validOptions:undefined
     }
     this.getValidOptions();
   }
   getValidOptions(){
     AdvertAPI.getCategories().then((res)=>{
      this.setState({
         validOptions:AdvertUtils.restructureSimpleCategories(res)
       });
     })
   }
   render(){
     var options =[{
          id:'hats',
          message:'Headwear',
          options:[
            {id:'paper_hats',
              message:'paper hats',
              options:{}
            },
            {id:'metal_helmets',
              message:'metal helmets',
              options:{}
            }
          ]
        },
        {   id:'footwear',
            message:'footwear',
            options:[
              {id:'sandals',
                message:'sandals',
                options:{}
              },
              {id:'boots',
                message:'boots',
                options:{}
              }
            ]
          }
      ];
    if(this.state.validOptions)options=this.state.validOptions;
    return (
        <div style={this.props.style} className ={this.props.className}>
            <NestedDropdown
                          openDirection='left'
                          name={this.props.name}
                          displayText={this.props.value[0]!==undefined?this.props.value.join('/'):'Select the category'}
                          hasCaret={true}
                          options={options}
                          onSelect={this.props.onCategoryUpdate}
                           />
        </div>
      );
  }
};
export default CategorySelect;
