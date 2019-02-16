import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Joke from './components/Joke';
import About from './components/About'
import Form from './components/Form';
import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/joke" component={Joke} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route render={() => <h1>Oops, page not found!</h1>} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
