import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import Home from './components/Home'
// import Error from './common/Error'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/*" component={Error} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
