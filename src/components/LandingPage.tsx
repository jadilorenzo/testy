import React from 'react'
import { Zoom, Avatar, Typography, useTheme } from '@material-ui/core'
import {
  Face,
  BarChartRounded,
  HomeRounded,
  BubbleChart
} from '@material-ui/icons'

export default (props: any) => {
  const theme = useTheme()

  return (
    <div
      className="landing-page-container"
      style={{ background: theme.palette.background.paper }}
    >
      <div>
        <Zoom in={true}>
          <>
            <div
              style={{
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <BubbleChart color="primary" fontSize="large" />
              <div className="title">
                Smart
                <span style={{ color: theme.palette.primary.main }}>One</span>
              </div>
            </div>
          </>
        </Zoom>
      </div>
      <div className="landing-page-avatar-group">
        <>
          <Zoom in={true}>
            <div className="avatar-group">
              <Avatar
                onClick={() => (window.location.href = '/chat')}
                className="avatar"
                style={{ width: '4rem', height: '4rem' }}
              >
                <Face fontSize="large" />
              </Avatar>
              <Typography variant="h6">Chat</Typography>
            </div>
          </Zoom>
          <Zoom in={true}>
            <div className="avatar-group">
              <Avatar
                onClick={() => (window.location.href = '/search')}
                className="avatar"
                style={{ width: '4rem', height: '4rem' }}
              >
                <HomeRounded fontSize="large" />
              </Avatar>
              <Typography variant="h6">Home</Typography>
            </div>
          </Zoom>
          <Zoom in={true}>
            <div className="avatar-group">
              <Avatar
                onClick={() => (window.location.href = '/scores')}
                className="avatar"
                style={{ width: '4rem', height: '4rem' }}
              >
                <BarChartRounded fontSize="large" />
              </Avatar>
              <Typography variant="h6">Scores</Typography>
            </div>
          </Zoom>
        </>
      </div>
    </div>
  )
}
