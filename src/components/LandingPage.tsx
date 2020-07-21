import React from 'react'
import { Typography, useTheme } from '@material-ui/core'
import {
  Face,
  TrendingUpRounded,
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
      </div>
      <div className="landing-page-avatar-group">
        <>
          <div className="avatar-group">
            <div
              onClick={() => (window.location.href = '/chat')}
              className="avatar"
              style={{ width: '4rem', height: '4rem' }}
            >
              <Face fontSize="large" color="inherit" />
            </div>
            <Typography variant="h6">Chat</Typography>
          </div>
          <div className="avatar-group">
            <div
              onClick={() => (window.location.href = '/courses')}
              className="avatar"
              style={{ width: '4rem', height: '4rem' }}
            >
              <HomeRounded fontSize="large" color="inherit" />
            </div>
            <Typography variant="h6">Home</Typography>
          </div>
          <div className="avatar-group">
            <div
              onClick={() => (window.location.href = '/scores')}
              className="avatar"
              style={{ width: '4rem', height: '4rem' }}
            >
              <TrendingUpRounded fontSize="large" color="inherit" />
            </div>
            <Typography variant="h6">Scores</Typography>
          </div>
        </>
      </div>
    </div>
  )
}
