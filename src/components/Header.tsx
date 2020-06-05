import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Dashboard } from '@material-ui/icons'

const Header = () => (
  <AppBar
    position="static"
    style={{
      /* background: '#ffe87f'*/
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Toolbar variant="regular">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Dashboard />
      </IconButton>
      <Typography variant="h5" className="title">
        Testy
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
