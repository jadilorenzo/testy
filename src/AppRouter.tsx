import React from 'react'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { AirDBProvider } from './context/AirDBContext'
import theme from './theme'
import './App.css'

function AppRouter() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <AirDBProvider>
            <App />
          </AirDBProvider>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default AppRouter
