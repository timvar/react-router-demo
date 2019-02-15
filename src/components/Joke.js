import React, { Component } from 'react'

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {joke: ''};
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
    this.newJoke();
  }


  render() {
    return (
      <div>
        <h1>Today's Chuck Norris Joke</h1>
        {this.state.joke}
      </div>
    )
  }
}

