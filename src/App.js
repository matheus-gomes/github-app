import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import GitHub from 'github-api';
import Routes from './Routes';

const gh = new GitHub();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { gh: new GitHub({

    }) }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            {Routes.map(function (r, index) {
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
    );
  }
}

export default App;
