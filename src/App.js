import React, { Component } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Joke from './components/Joke';
import About from './components/About'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Link to="/">Home |</Link>  
          <Link to="/joke"> Today's Chuck Norris |</Link>
          <Link to="/about"> About</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/joke" component={Joke} />
            <Route path="/about" component={About} />
            <Route render={() => <h1>Oops, page not found!</h1>} />
          </Switch>
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
