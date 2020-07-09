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
  useTheme
} from '@material-ui/core'
import { ExitToApp, Edit } from '@material-ui/icons'
import { AirDBContext } from '../context/AirDBContext'

export default React.memo((props: any) => {
  const { users, handleLogin } = React.useContext(AirDBContext)
  const [toggled, setToggled] = React.useState(false)
  const [username, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const theme = useTheme()

  const handleClose = () => {
    setToggled(false)
  }

  return users.length > 0 ? (
    <>
      <br />
      <Paper>
        <Typography variant="h3">Home</Typography>
        <div
          style={{
            padding: '1em',
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 4
          }}
        >
          <Typography variant="h4">Sign Up</Typography>
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
        </div>
        <Button
          style={{ marginTop: '0.2em' }}
          onClick={() => setToggled(true)}
          color="primary"
        >
          Login <ExitToApp style={{ marginLeft: '0.2em' }} />
        </Button>

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
            <Button
              onClick={() => handleLogin({ password, username, setToggled })}
              color="primary"
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  ) : null
})
