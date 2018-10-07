import update from 'immutability-helper'
//https://github.com/kolodny/immutability-helper

//later there might be several reducers
const initialState ={
    uselessDummy:{subuselessDummy:1}
  }
const reducer=(state=initialState, action)=>{

   switch(action.type){
     case 'CH_CURR_CONF':
       return update(state, {
        currentConfig:{$set:action.payload}});

     default:
        return state;
   }

}
export default reducer;
