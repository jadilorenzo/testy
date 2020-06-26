import React from 'react'
import {
  Typography,
  Button,
  Chip,
  Card,
  ButtonGroup,
  useTheme
} from '@material-ui/core'
import Paper from './Paper'

export default (props: {
  test: any
  id: string
  setRedirect: any
  questions: any
  user: any
}) => {
  const theme = useTheme()
  return (
    <div>
      <br />
      <Paper style={{ padding: '1em', paddingBottom: 0 }}>
        <Typography variant="h4">{props.test.title}</Typography>
        <Typography variant="h5">
          <em>{(props.user || { fields: {} }).fields.username}</em>
        </Typography>
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
        <div style={{ height: '0.5rem' }} />
        {props.test.questions !== undefined ? (
          props.questions
            .filter((question: any) =>
              (props.test.questions || '').split(', ').includes(question.id)
            )
            .map((question: any) => (
              <Card
                elevation={0}
                style={{
                  padding: '0.5em',
                  marginBottom: '0.5em',
                  background: theme.palette.background.default
                }}
              >
                {question.fields.question}
              </Card>
            ))
        ) : (
          <em>No Questions</em>
        )}
        <div style={{ height: '0.5rem' }} />
        <ButtonGroup orientation="vertical">
          <Button
            variant="text"
            onClick={() => {
              props.setRedirect(`/add/question/to/${props.id}`)
            }}
          >
            + Question
          </Button>
          <Button
            color="primary"
            onClick={() => props.setRedirect(`/take/test/${props.id}`)}
          >
            Take Test
          </Button>
        </ButtonGroup>
      </Paper>
    </div>
  )
}
