import React, { Component } from 'react';
import { TextField, withStyles, Grid } from '@material-ui/core';
import Login from './Login/Login';
import globalStore from "./Global"
import Carregando from './Carregando';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

class App extends Component {

  constructor() {
    super();
    this.state = {
      usuarioLogado: null,
      userSearched: null,
      carregando: true,
    }
  }

  componentWillMount() {
    this.unsubscribe = globalStore.subscribe(() => {
      this.setState({
        usuarioLogado: globalStore.getState().globalReducer.usuarioLogado,
        carregando: globalStore.getState().globalReducer.carregando
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    })
  }

  async submit(event) {
    event.preventDefault()
    let userSearched = await this.getUser(this.state.username);
    debugger
    this.setState({
      userSearched
    })
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

  render() {
    const { classes } = this.props;
    const { carregando, usuarioLogado, userSearched } = this.state;
    return <>
      <Carregando carregando={carregando}></Carregando>
      {
        carregando ? <></> :
        usuarioLogado ? (
        <>
          <form className={classes.container} onSubmit={e => this.submit(e)}>
            <TextField
              id="username"
              className={classes.textField}
              value={this.state.username}
              fullWidth
              onChange={e => this.handleChange(e)}
            />
          </form>
          {userSearched ? userSearched.name : ""}
        </>
        ) : <Login/> 
      }
    </>
  }
}

export default withStyles(styles)(App);