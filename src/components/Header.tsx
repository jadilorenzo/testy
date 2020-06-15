import React from 'react'
import { AirDBContext } from '../context/AirDBContext'
import {
  AppBar,
  Toolbar,
  Typography,
  Backdrop,
  CircularProgress,
  Fab
} from '@material-ui/core'

import { Close } from '@material-ui/icons'
// import { CategorySharp } from '@material-ui/icons'
import Book from './icons/Book'

const Header = (props: any) => {
  const { loading } = React.useContext(AirDBContext)

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          display: 'flex',
          alignItems: 'left',
          top: 'auto',
          background: '#1574d2',
          bottom: 0,
          zIndex: 500
        }}
      >
        <div
          style={{
            width: '100%',
            height: '2rem',
            background: '#1263c0'
          }}
        />
        <Toolbar variant="regular">
          <span onClick={() => props.setRedirect('/')}>
            <Book size={30} color="#fff" />
            <Typography variant="h4" className="title">
              Testy
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
      <Backdrop open={loading} style={{ zIndex: 1000 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Fab
        color="secondary"
        onClick={() => props.setRedirect('/add')}
        style={{
          borderRadius: 3,
          position: 'fixed',
          top: 'auto',
          bottom: '1.5em',
          left: 'calc(50% - 50px/2)',
          height: '50px',
          width: '50px',
          transform: 'rotate(45deg)',
          zIndex: 500
        }}
      >
        <Close
          style={{
            position: 'relative',
            color: 'black'
          }}
        />
      </Fab>
    </>
  )
}

export default Header
