import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const Header = () => (
  <AppBar position="static">
    <Toolbar variant="regular">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6" className="title">
        Testy
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
