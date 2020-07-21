import React from 'react'
import { AirDBContext } from '../context/AirDBContext'
import {
  AppBar,
  Fade,
  Grid,
  IconButton,
  Zoom,
  useTheme
} from '@material-ui/core'
import loader from './loader.gif'

import { Add, ExitToApp, BubbleChart } from '@material-ui/icons'

const Header = (props: any) => {
  const { loading, logout } = React.useContext(AirDBContext)
  const theme = useTheme()

  return (
    <>
      <AppBar
        color="inherit"
        style={{
          display: 'flex',
          color: theme.palette.common.white,
          background: theme.palette.primary.main,
          zIndex: 500
        }}
      >
        <div
          style={{
            width: '85%',
            margin: 'auto',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'left'
          }}
        >
          <span onClick={() => props.setRedirect('/')}>
            <BubbleChart
              color="inherit"
              fontSize="large"
              style={{ position: 'relative', top: 5 }}
            />
            <span className="title">
              Smart
              <span style={{ color: theme.palette.common.white }}>One</span>
            </span>
          </span>
          <div style={{ position: 'absolute', right: 'calc(7.5%)' }}>
            <Zoom in={true} style={{ transitionDelay: true ? '50ms' : '0ms' }}>
              <IconButton
                color="inherit"
                onClick={() => props.setRedirect('/add')}
              >
                <Add />
              </IconButton>
            </Zoom>
            <Zoom in={true}>
              <IconButton
                onClick={() => {
                  logout().then(() => {
                    props.setRedirect('/')
                    window.localStorage.removeItem('username')
                  })
                }}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </Zoom>
          </div>
        </div>
      </AppBar>
      {window.location.pathname.includes('add') || (
        <Fade
          in={loading}
          style={{
            zIndex: 1000,
            position: 'absolute',
            height: '100%',
            background: '#fff'
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <img
              src={loader}
              alt="loader"
              style={{ minWidth: '15rem', maxWidth: '25%', margin: 'auto' }}
            />
            {loading && (
              <audio
                autoPlay={true}
                preload="http://localhost:3000/hero_simple-celebration-01.wav"
                src="http://localhost:3000/hero_simple-celebration-01.wav"
              ></audio>
            )}
          </Grid>
        </Fade>
      )}
    </>
  )
}

export default Header
