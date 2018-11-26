

import React from 'react'
import MainPage from 'pages/MainPage'
import LoginPage from 'pages/authorization/LoginPage'
import SearchPage from 'pages/SearchPage'
import RegisterPage from 'pages/authorization/RegisterPage'
import CreateAdvert from 'pages/Adverts/CreateAdvert'
import {Route, Switch, BrowserRouter } from 'react-router-dom' //use Link to create links
import TestRouter from 'routers/TestRouter'
import ChatPage from 'pages/ChatPage'

class MainRouter extends React.Component{

   render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/login"    component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/createAdvert" component={CreateAdvert}/>
            <Route path='/search'  component={SearchPage}/>
            <Route path="/tests"   component={TestRouter}/>
            <Route path="/chat" component={ChatPage}/>
            <Route path="/"   component={MainPage}/>


          </Switch>
      </BrowserRouter>
    )
  }

};
export default MainRouter;
