import React from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Typography, Chip } from '@material-ui/core'
import Paper from './Paper'
import Button from './Button'

export default (props: { test: any }) => {
  const [redirect, setRedirect] = React.useState(false)

  if (redirect) {
    return <Redirect to="/add/question" />
  }

  return (
    <Container>
      <br />
      <Paper style={{ padding: '1em', paddingBottom: 0 }}>
        <Typography variant="h5">{props.test.title}</Typography>
        {props.test.tags.split(', ').length > 0 ? (
          props.test.tags
            .split(', ')
            .map((x: string, index: number) => (
              <Chip
                variant="outlined"
                key={index}
                label={x}
                style={{ marginRight: '0.5em' }}
              />
            ))
        ) : (
          <em>No tags</em>
        )}
        <br /> <br />
        <Button
          onClick={() => {
            setRedirect(true)
          }}
          color="secondary"
          variant="contained"
          style={{ marginLeft: '1em' }}
        >
          + Question
        </Button>
        {props.test.questions}
      </Paper>
    </Container>
  )
}
