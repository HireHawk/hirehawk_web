

import React from 'react'
import WellcomePage from 'pages/WellcomePage'
import MainPage from 'pages/MainPage'
import LoginPage from 'pages/authorization/LoginPage'
import RegisterPage from 'pages/authorization/RegisterPage'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
class MainRouter extends React.Component{
   constructor(props){
     super(props);
   }
   render(){

    return (
      <BrowserRouter>
        <Switch>
             <Route exact path="/" component={MainPage}/>
            {/* <Route exact path="/" component={Search}/> */}
            <Route path="/wellcome" component={WellcomePage}/>
          </Switch>
      </BrowserRouter>
    )
  }

};
export default MainRouter;
