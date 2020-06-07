import React from 'react'
import { AppBar, Toolbar, Typography, SvgIcon } from '@material-ui/core'
import { CategorySharp } from '@material-ui/icons'
import svg from './test.svg'

const Header = () => (
  <AppBar
    position="static"
    style={{
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Toolbar variant="regular">
      <img src={svg} />
      <Typography variant="h4" className="title">
        Testy
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
