

import React from 'react'
import WellcomePage from 'test/pages/WellcomePage'
import MainPage from 'pages/MainPage'
import LoginPage from 'pages/authorization/LoginPage'
import RegisterPage from 'pages/authorization/RegisterPage'
import CreateAdvert from 'pages/Adverts/CreateAdvert'
import {Route, Switch, BrowserRouter } from 'react-router-dom' //use Link to create links


class MainRouter extends React.Component{

   render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/"   component={MainPage}/>
            <Route path="/wellcome" component={WellcomePage}/>
            <Route path="/login"    component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/createAdvert" component={CreateAdvert}/>
            {/* <Route exact path="/yourPage" component={YourComponent}/> */}
          </Switch>
      </BrowserRouter>
    )
  }

};
export default MainRouter;
