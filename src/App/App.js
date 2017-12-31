import React, { Component } from 'react';
// TODO: check if switch is needed
import { Route, Switch } from 'react-router-dom';
import Category from './../PageCategory/Category';
import Products from './../PageProducts/Products';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

componentDidMount() {
  /*database.ref().on('value', () => {
    console.log('the data changed');
  });*/
  // auth.onAuthStateChanged((currentUser) => {
  //   console.log('AUTH_CHANGE', currentUser);
  //   this.setState({currentUser});
  // });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* /* Route components are rendered if the path prop matches the current URL */ }
           {/* <Route path="/" component={Category}/> */}
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>
        {/* <SignIn /> */}
      </div>
    );
  }
}

export default App;
