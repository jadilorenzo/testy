import React from 'react'
import { AirDBContext } from '../context/AirDBContext'
import {
  AppBar,
  Typography,
  Fade,
  Grid,
  IconButton,
  Zoom,
  useTheme
} from '@material-ui/core'
import loader from './loader.gif'

import {
  Add,
  ExitToApp,
  BubbleChart,
  MoreHoriz,
  Close
} from '@material-ui/icons'

const Header = (props: any) => {
  const [toggled, setToggled] = React.useState(false)
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
            height: '5em',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span onClick={() => props.setRedirect('/')}>
            <BubbleChart
              color="primary"
              fontSize="large"
              style={{ position: 'relative', top: 5 }}
            />
            <Typography
              variant="h4"
              className="title"
              style={{ fontFamily: 'Avenir Next' }}
            >
              Smart
              <span style={{ color: theme.palette.primary.main }}>One</span>
            </Typography>
          </span>
          {loggedIn || (
            <div style={{ position: 'absolute', right: 'calc(7.5%)' }}>
              <Zoom in={toggled} timeout={400}>
                <IconButton
                  color="secondary"
                  onClick={() => props.setRedirect('/add')}
                >
                  <Add />
                </IconButton>
              </Zoom>
              <Zoom in={toggled}>
                <IconButton onClick={handleLogout} color="secondary">
                  <ExitToApp />
                </IconButton>
              </Zoom>

              {!toggled ? (
                <IconButton onClick={() => setToggled(true)}>
                  <MoreHoriz color="primary" />
                </IconButton>
              ) : (
                <IconButton onClick={() => setToggled(false)}>
                  <Close color="primary" />
                </IconButton>
              )}
            </div>
          )}
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
              style={{ minWidth: '15rem', maxWidth: '25%', margin: 'auto' }}
            />
          </Grid>
        </Fade>
      )}
    </>
  )
}

export default Header
