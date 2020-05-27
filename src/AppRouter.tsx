import React from 'react'
import App from './App'
import { TuiHeader } from './components'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { TestsProvider } from './context/TestsContext'

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <TestsProvider>
        <TuiHeader />
        <App />
      </TestsProvider>
    </ThemeProvider>
  )
}

export default AppRouter
