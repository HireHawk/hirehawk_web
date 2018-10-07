import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer'

import WellcomePage from './pages/WellcomePage'
//this is for <<redux dev tools>> browser extention, recommended
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer); //use this insteadfor production build
 render(<Provider store ={store} ><WellcomePage/></Provider>, document.getElementById('root'));
