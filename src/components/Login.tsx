import React from 'react'
import Paper from './Paper'
import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  Divider
} from '@material-ui/core'
import { ExitToApp, Edit } from '@material-ui/icons'
import Question from './take-test/Question'
import { AirDBContext } from '../context/AirDBContext'

export default React.memo((props: any) => {
  const { users, updateAirDB } = React.useContext(AirDBContext)
  const [toggled, setToggled] = React.useState(false)
  const [username, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [newUsername, setNewUsername] = React.useState('User Name')
  const [newPassword, setNewPassword] = React.useState('password')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmition = () => {
    setSubmitted(true)
  }

  const handleSubmitionClick = () => {
    setSubmitted(true)
    handleSubmition()
  }

  const handleUsernameChange = (e: any) => {
    if (!submitted) setNewUsername(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    if (!submitted) setNewPassword(e.target.value)
  }

  const handleClose = () => {
    setToggled(false)
  }

  const handleLogin = () => {
    const isMatching =
      users.filter(
        user =>
          user.fields.password === password && user.fields.username === username
      ).length > 0
    const userId = users.filter(user => user.fields.username === username)[0].id

    if (isMatching) {
      setToggled(false)
      props.setRedirect('/')
      window.localStorage.setItem('username', username)
      updateAirDB('Testy - Users', userId, {
        active: 'true'
      })
    }
  }

  return users.length > 0 ? (
    <>
      <br />
      <Paper>
        <Typography variant="h3">Home</Typography>
        <br />
        <Divider />
        <Typography variant="h4">Sign Up</Typography>
        <div style={{ display: 'flex', width: '100%', height: 'max-content' }}>
          <div style={{ width: 'calc(50% - 2em)' }}>
            <Question
              question={{
                question: 'Enter your username.',
                type: 'essay',
                autocheck: true
              }}
              handlers={[handleUsernameChange]}
              value={newUsername}
              submitted={submitted}
              handleSubmit={handleSubmitionClick}
              type="text"
            />
          </div>
          <div style={{ paddingLeft: '2em', width: '50%' }}>
            <Question
              question={{
                question: 'Enter your password.',
                type: 'essay',
                autocheck: true
              }}
              handlers={[handlePasswordChange]}
              value={newPassword}
              submitted={submitted}
              handleSubmit={handleSubmitionClick}
              type="password"
            />
          </div>
        </div>
        <Button disabled={!submitted} color="primary">
          Sign Up
        </Button>
        <IconButton
          disabled={!submitted}
          onClick={() => setSubmitted(false)}
          style={{ marginLeft: '0.2em' }}
        >
          <Edit />
        </IconButton>
        <Divider />
        <IconButton
          style={{ marginTop: '0.2em' }}
          onClick={() => setToggled(true)}
          color="primary"
        >
          <ExitToApp />
        </IconButton>

        <Dialog
          fullWidth={true}
          open={toggled}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle disableTypography id="alert-dialog-title">
            <Typography variant="h4">Login to Testy</Typography>
          </DialogTitle>
          <DialogContent>
            <FormControl style={{ width: '100%' }}>
              <TextField
                value={username}
                onChange={e => setUser(e.target.value)}
                fullWidth
                label="User Name"
              />
            </FormControl>
            <br /> <br />
            <FormControl style={{ width: '100%' }}>
              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                type="password"
                label="Password"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  ) : null
})
