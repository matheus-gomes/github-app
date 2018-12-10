import React, { Component } from 'react';
import { Switch, Link, Route } from 'fuse-react';
import GitHub from 'github-api';
import Routes from './Routes';
import globalStore from "./Global"
import Login from './Login/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      usuarioLogado: null, 
      gh: null,
    }
  }

  componentWillMount() {
    this.unsubscribe = globalStore.subscribe(() => {
      debugger
      this.setState({
        usuarioLogado: globalStore.getState().globalReducer.usuarioLogado,
        gh: globalStore.getState().globalReducer.gh,
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const user = this.state.gh && this.state.gh.getUser();
    return user ? 
      (
        <div className="App">
          <main>
            <Switch>
              {Routes().map(function (r, index) {
                return <Route 
                  key={index}
                  path={r.path}
                  component={r.component}
                  exact={r.exact}
                />
              })}
            </Switch>
          </main>
          
        </div>
      ) : <Login/>
  }
}

export default App;
