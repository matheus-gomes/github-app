import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import GitHub from 'github-api';

import { loginGithub } from './autenticacao';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
  state = {
    login: '',
    password: '',
  }

  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { login, password } = this.state;
    return (
      <form className={classes.container}>
        <TextField
          id="login"
          label="Login"
          className={classes.textField}
          value={login || ''}
          onChange={this.handleChange('login')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={password || ''}
          type="password"
          autoComplete="current-password"
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Button onClick={this.login}>Entrar</Button>
      </form>
    )
  }

  login() {
    debugger
    const gh = new GitHub({
      username: this.state.login,
      password: this.state.password,
    })

    console.log(gh)
    console.log(gh.getUser())
  }
}

export default withStyles(styles)(Login)