import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { ClearAllSharp } from '@material-ui/icons'

const Header = () => (
  <AppBar
    position="static"
    style={{
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Toolbar variant="regular">
      <ClearAllSharp style={{ fontSize: '2.5rem' }} />
      <Typography variant="h4" className="title">
        Testy
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
