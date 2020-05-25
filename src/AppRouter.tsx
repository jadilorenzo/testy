import React from 'react'
import App from './App'
import { TuiHeader } from './components'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <TuiHeader />
      <App />
    </ThemeProvider>
  )
}

export default AppRouter
