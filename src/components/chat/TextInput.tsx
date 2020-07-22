import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { AirDBContext } from '../../context/AirDBContext'

export default (props: any) => {
  const [message, setMessage] = React.useState<string>('')
  const { handleSendMessage } = React.useContext(AirDBContext)

  const sendMessage = () => {
    handleSendMessage({
      groupid: props.groupId,
      text: message
    }).then(() => setMessage(''))
  }

  return (
    <>
      <div className="text-input-group">
        <TextField
          onChange={(e: any) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
          variant="outlined"
          id="text"
          type="text"
        />
        <div className="text-send-button">
          <Button
            onClick={sendMessage}
            variant="contained"
            color="primary"
            endIcon={<Send />}
          >
            Send
          </Button>
        </div>
      </div>
      {/*
        <Button
          color="primary"
          variant="outlined"
          style={{ marginTop: '0.5rem' }}
        >
          Share Test
        </Button>
      */}
    </>
  )
}
