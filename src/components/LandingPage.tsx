import React from 'react'
import { Button, Zoom, Avatar, Typography } from '@material-ui/core'
import {
  Face,
  AddRounded,
  SearchRounded,
  HomeRounded
} from '@material-ui/icons'

export default (props: any) => {
  const [clicked, setClicked] = React.useState<boolean>(false)

  return (
    <div className="landing-page-container">
      <div>
        {!clicked && (
          <Zoom in={!clicked}>
            <>
              <div
                style={{
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center'
                }}
              >
                <HomeRounded
                  color="primary"
                  style={{ margin: 'auto', fontSize: '4rem' }}
                />
              </div>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '9rem', height: '4.5rem', fontSize: '1.5rem' }}
                onClick={() => setClicked(true)}
              >
                GO
              </Button>
            </>
          </Zoom>
        )}
      </div>
      <div className="landing-page-avatar-group">
        {clicked && (
          <>
            <Zoom in={clicked}>
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
            <Zoom in={clicked}>
              <div className="avatar-group">
                <Avatar
                  onClick={() => (window.location.href = '/add')}
                  className="avatar"
                  style={{ width: '4rem', height: '4rem' }}
                >
                  <AddRounded fontSize="large" />
                </Avatar>
                <Typography variant="h6">Add</Typography>
              </div>
            </Zoom>
            <Zoom in={clicked}>
              <div className="avatar-group">
                <Avatar
                  onClick={() => (window.location.href = '/search')}
                  className="avatar"
                  style={{ width: '4rem', height: '4rem' }}
                >
                  <SearchRounded fontSize="large" />
                </Avatar>
                <Typography variant="h6">Search</Typography>
              </div>
            </Zoom>
          </>
        )}
      </div>
    </div>
  )
}
