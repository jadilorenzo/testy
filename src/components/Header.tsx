import React from 'react'
import { AirDBContext } from '../context/AirDBContext'
import { AppBar, IconButton, Zoom, useTheme } from '@material-ui/core'
import AppMenu from './AppMenu'
import { ExitToApp, BubbleChart, MenuRounded } from '@material-ui/icons'

const Header = (props: any) => {
  const { handleLogout } = React.useContext(AirDBContext)
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
    </>
  )
}

export default Header
