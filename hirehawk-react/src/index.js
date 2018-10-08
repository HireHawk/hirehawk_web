import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer'

import MainRouter from './routers/MainRouter'
//this is for <<redux dev tools>> browser extention, recommended
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer); //use this insteadfor production build
 render(<Provider store ={store} ><MainRouter/></Provider>, document.getElementById('root'));
