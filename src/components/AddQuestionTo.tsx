import React from 'react'
import Paper from './Paper'
import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl
} from '@material-ui/core'
import Button from './Button'
import { useParams, Redirect } from 'react-router-dom'
import { AirDBContext } from '../context/AirDBContext'

export default () => {
  const [questionIDs, setQuestions] = React.useState<string[]>([])
  const [redirect, setRedirect] = React.useState<boolean>(false)

  const { id } = useParams()
  const { tests, questions, updateAirDB } = React.useContext(AirDBContext)
  const test = tests.filter(test => test.id === id)[0] || {
    fields: { title: '' }
  }

  const handleChange = (question: any) => {
    if (!questionIDs.includes(question.id)) {
      setQuestions(prev => {
        console.log('added', [...prev, question.id])
        return [...prev, question.id]
      })
    } else {
      setQuestions(prev => {
        let newIDs = prev
        const index = newIDs.indexOf(question.id)
        if (index > -1) {
          newIDs.splice(index, 1)
        }
        console.log('removed', newIDs)
        return newIDs
      })
    }
  }

  const handleClick = () => {
    updateAirDB('Testy - Tests', id, {
      questions: questionIDs.join(', ')
    }).then(() => {
      setRedirect(true)
    })
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <br />
      <Paper style={{ padding: '1em' }}>
        <Typography variant="h5">
          Add question to "{test.fields.title}"
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <FormControl>
            {questions.map((question: any) => (
              <FormControlLabel
                onChange={() => handleChange(question)}
                checked={questionIDs.includes(question.id)}
                control={
                  <Checkbox checked={questionIDs.includes(question.id)} />
                }
                label={question.fields.question}
                key={question.fields.question}
              />
            ))}
          </FormControl>
        </Grid>
        <Button onClick={handleClick}>Add Questions</Button>
      </Paper>
    </div>
  )
}
