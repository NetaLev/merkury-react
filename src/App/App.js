import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Category from './../PageCategory/Category';
import Products from './../PageProducts/Products';
import Login from './../PageLogin/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
           <Route exact={true} path="/" component={Login}/>
           <Route path="/login" component={Login}/>
           <PrivateRoute path="/category" component={Category}/>
           <PrivateRoute path="/products" component={Products}/>
        </Switch>
      </div>
    );
  }
}
export default App;
