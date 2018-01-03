import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Category from './../PageCategory/Category';
import Products from './../PageProducts/Products';
import Home from './../PageHome/Home';
import { auth } from './../firebase';
import Login from './../PageLogin/Login';

class App extends Component {

  state = {currentUser: null};

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    });
  }

  render() {
    const {currentUser} = this.state;

    return (
      <div>
        <Switch>
           <PrivateRoute exact={true} path="/" component={Home} currentuser={currentUser}/>
           <Route path="/login" component={Login}/>
           <PrivateRoute path="/category" component={Category} currentuser={currentUser}/>
           <PrivateRoute path="/products" component={Products} currentuser={currentUser}/>
        </Switch>
      </div>
    );
  }
}
export default App;
