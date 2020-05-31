import React from 'react'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { TuiHeader } from './components'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

function AppRouter() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TuiHeader />
        <Switch>
          <App />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default AppRouter
