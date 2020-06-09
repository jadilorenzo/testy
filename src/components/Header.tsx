import React from 'react'
import { AppBar, Toolbar, Typography, SvgIcon } from '@material-ui/core'
// import { CategorySharp } from '@material-ui/icons'
import Book from './icons/Book'

const Header = () => (
  <AppBar
    position="static"
    style={{
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Toolbar variant="regular">
      <Book color="white" size={30} />
      <Typography variant="h4" className="title">
        Testy
      </Typography>
    </Toolbar>
    <span
      style={{
        width: '100%',
        background: 'linear-gradient(0.4turn, #ff5d16 50% , #FFF 50%)'
        // height: '0.2em'
      }}
    />
  </AppBar>
)

export default Header
