import React from 'react'
import { Typography, Button, Chip, Card, useTheme } from '@material-ui/core'
import Paper from './Paper'

export default (props: {
  test: any
  id: string
  setRedirect: any
  questions: any
}) => {
  const theme = useTheme()
  return (
    <div>
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
        <Button color="primary">Take Test</Button>
        <br />
        {props.questions
          .filter((question: any) =>
            props.test.questions.split(', ').includes(question.id)
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
          ))}
        <br />
        <Button
          onClick={() => {
            props.setRedirect(`/add/question/to/${props.id}`)
          }}
        >
          + Question
        </Button>
      </Paper>
    </div>
  )
}
