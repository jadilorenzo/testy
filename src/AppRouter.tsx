import React from 'react'
import App from './App'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import './App.css'

function AppRouter() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className="title">
            Testy
          </Typography>
        </Toolbar>
      </AppBar>
      <App />
    </div>
  )
}

export default AppRouter
