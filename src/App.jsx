import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user: {
        name: ''
      }
    }
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  async submit(event) {
    event.preventDefault()
    debugger
    let user = await this.getUser(this.state.username);
    this.setState({
      user: {
        name: user.name
      }
    })
  }

  getUser(username) {
    debugger
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        response.json()
      })
      .then(response => {
        return response
      })
  }

  render() {
    return (
      <div className="App">
        <main>
          <form onSubmit={e => this.submit(e)}>
            <TextField
              id="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </form>
          {this.state.user.name}
        </main>
      </div>
    )
  }
}

export default App;
