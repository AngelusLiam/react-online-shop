import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './components/home/home';
import dipendenti from './components/dipendenti/dipendenti'
import MainTemplate from './components/mainLayout/template/mainTemplate';

export default class TestReact extends Component {
    render(){
      return(
        <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path = "/" component = {home}/>
            <Route exact path = '/cards' component = {dipendenti}/>
          </Switch>
        </MainTemplate>
        </BrowserRouter>
      );
    }
}
