import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

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
    return (
      <form className={classes.container}>
        {/* <TextField
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
        /> */}
        <Button onClick={() => this.login()}>Entrar com GitHub</Button>
      </form>
    )
  }

  login() {
    debugger
    return window.location = 'https://github.com/login/oauth/authorize?' +
      'client_id=9c51c8ab3840d2cc2d77',
      '&redirect_uri=' + window.location.origin + '/auth/callback',
      '&scope=user,repo'
  }
}

export default withStyles(styles)(Login)