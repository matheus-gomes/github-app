import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import { loginGithub, loginWithGithub } from './autenticacao';

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

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container}>
        <Button onClick={loginWithGithub}>Entrar com GitHub</Button>
      </form>
    )
  }
}

export default withStyles(styles)(Login)