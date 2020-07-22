import React from 'react'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import './App.css'

function AppRouter() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
            <App />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default AppRouter
