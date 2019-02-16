import React, { Component } from 'react'

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {joke: 'Hihii...'};
  }

  newJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(responseData => {
      this.setState({joke: responseData.value});
      console.log(responseData);
    })
    .catch(err => console.log('Error msg: ', err));
  }

  componentDidMount() {
  
  }


  render() {
    return (
      <div>
        <h1>Today's Chuck Norris Joke</h1>
        <p>{this.state.joke}</p>
        <button onClick={this.newJoke}>New Joke</button>
      </div>
    )
  }
}

