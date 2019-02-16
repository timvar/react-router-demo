import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="/">My Page</Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>  
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/joke"> Today's Chuck Norris</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/form"> Form</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
