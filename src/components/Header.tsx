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
import AppMenu from './AppMenu'
import loader from './loader.gif'

import { Add, ExitToApp, BubbleChart, MenuRounded } from '@material-ui/icons'

const Header = (props: any) => {
  const { loading, handleLogout } = React.useContext(AirDBContext)
  const theme = useTheme()
  const [toggled, setToggled] = React.useState<boolean>(false)

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
          <span>
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
            <Zoom in={true}>
              <IconButton
                onClick={() => {
                  handleLogout()
                  window.localStorage.removeItem('username')
                  props.setRedirect('/')
                }}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </Zoom>
            <Zoom in={true}>
              <IconButton
                onClick={() => {
                  setToggled(t => !t)
                }}
                color="inherit"
              >
                <MenuRounded />
              </IconButton>
            </Zoom>
          </div>
        </div>
        <AppMenu
          in={toggled}
          setRedirect={(string: string) => {
            setToggled(false)
            props.setRedirect(string)
          }}
        />
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
