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

const Header = () => {
  const { loading } = React.useContext(AirDBContext)

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          display: 'flex',
          alignItems: 'left',
          top: 'auto',
          background: 'rgb(250, 230, 168)',
          color: 'black',
          bottom: 0,
          zIndex: 500
        }}
      >
        <div
          style={{
            width: '100%',
            height: '2rem',
            background: 'rgb(250, 249, 212)'
          }}
        />
        <Toolbar variant="regular">
          <Book size={30} />
          <Typography variant="h4" className="title">
            Testy
          </Typography>
        </Toolbar>
      </AppBar>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="mdc-button foo-button">
        <Fab
          color="secondary"
          style={{
            borderRadius: 2,
            position: 'fixed',
            top: 'auto',
            bottom: '1.5em',
            left: '50%',
            height: '50px',
            width: '50px',
            transform: 'rotate(45deg)',
            // border: 'transparent 10px solid',
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
      </div>
    </>
  )
}

export default Header
