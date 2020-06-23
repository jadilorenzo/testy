import React from 'react'
import { AirDBContext } from '../context/AirDBContext'
import {
  AppBar,
  Typography,
  Fade,
  Grid,
  IconButton,
  useTheme
} from '@material-ui/core'
import loader from './loader.gif'

import { Add, ExitToApp } from '@material-ui/icons'
import Testy from './Testy.png'

const Header = (props: any) => {
  const { loading, users, updateAirDB } = React.useContext(AirDBContext)
  const theme = useTheme()
  const user = users.filter(
    user => user.fields.username === window.localStorage.getItem('username')
  )[0] || { fields: { active: 'false' } }
  const loggedIn = !JSON.parse(user.fields.active)

  const handleLogout = () => {
    const userId = users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0].id

    updateAirDB('Testy - Users', userId, {
      active: 'false'
    }).then(() => {
      props.setRedirect('/')
      window.localStorage.removeItem('username')
    })
  }

  return (
    <>
      <AppBar
        color="inherit"
        style={{
          display: 'flex',
          alignItems: 'left',
          background: theme.palette.background.paper,
          zIndex: 500
        }}
      >
        <div
          style={{
            width: '100%',
            background: theme.palette.background.default
          }}
        />
        <div
          style={{
            width: '85%',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{
              height: '5em',
              marginLeft: '-1em'
            }}
            src={Testy}
          />
          <span onClick={() => props.setRedirect('/')}>
            <Typography variant="h4" className="title">
              Smart
              <span style={{ color: theme.palette.primary.main }}>One</span>
            </Typography>
          </span>
          {loggedIn || (
            <div style={{ position: 'absolute', right: 'calc(7.5%)' }}>
              <IconButton
                color="secondary"
                onClick={() => props.setRedirect('/add')}
              >
                <Add />
              </IconButton>
              <IconButton onClick={handleLogout} color="primary">
                <ExitToApp />
              </IconButton>
            </div>
          )}
        </div>
      </AppBar>
      {window.location.pathname.includes('add') ||
        window.location.pathname !== '/' || (
          <Fade
            in={loading}
            style={{
              zIndex: 1000,
              position: 'absolute',
              height: '100%',
              background: '#fff'
            }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <img src={loader} style={{ width: '25%', margin: 'auto' }} />
            </Grid>
          </Fade>
        )}
    </>
  )
}

export default Header
