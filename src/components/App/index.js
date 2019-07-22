import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import dayjs from 'dayjs'

// Include Pages in the router
import Home from '../../pages/Home'
import Login from '../../pages/Login'

// Call Components
// import Nav from '../Nav'
// import Header from '../Header'
// import Filters from '../Filters'
import Components from './components'
// Call store
import store from '../../store'
import 'dayjs/locale/es'

dayjs.locale('es')

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { isLogged } = this.props
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <div className="container">
            <Components />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
