
import React from 'react'
// import Input from '@material-ui/core/Input'; // may be used

import './styles.css'
import 'styles/positioning.css'
import NestedDropdown from './NestedDropdown'
import qs from 'qs'

class CategorySelect extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
     var options =[{
          id:'hats',
          message:'Headwear',
          options:[
            {id:'101',
              message:'paper hats',
              options:{}
            },
            {id:'123',
              message:'metal helmets',
              options:{}
            }
          ]
        },
        {   id:'Footwear',
            message:'footwear',
            options:[
              {id:'sandals',
                message:'sandals',
                options:{}
              },
              {id:'boot',
                message:'boots',
                options:{}
              }
            ]
          }
      ];
    return (
        <div style={this.props.style} className ={this.props.className}>
            <NestedDropdown openDirection='left'
                          name='Category'
                          displayText='Select the category'
                          hasCaret={true}
                          options={options}
                           />
        </div>
      );
  }
};
export default CategorySelect;
