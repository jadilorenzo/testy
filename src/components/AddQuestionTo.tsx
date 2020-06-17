import React, { useCallback } from 'react'
import Paper from './Paper'
import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  Button
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { AirDBContext } from '../context/AirDBContext'

export default (props: any) => {
  const [questionIDs, setQuestions] = React.useState<string[]>([])

  const { id } = useParams()
  const { tests, questions, updateAirDB } = React.useContext(AirDBContext)
  const test = tests.filter(test => test.id === id)[0] || {
    fields: { title: '' }
  }

  const handleChange = useCallback((question: any) => {
    setQuestions(prev => {
      if (!prev.includes(question.id)) {
        return [...prev, question.id]
      } else {
        let newIDs = prev
        const index = newIDs.indexOf(question.id)
        newIDs.splice(index, 1)

        return newIDs
      }
    })
  }, [])

  const handleClick = () => {
    updateAirDB('Testy - Tests', id, {
      questions: questionIDs.join(', ')
    }).then(() => {
      props.setRedirect('/')
    })
  }

  console.log('render', questionIDs)

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
            {questions.map((question: any) => {
              return (
                <FormControlLabel
                  onChange={() => handleChange(question)}
                  checked={questionIDs.includes(question.id)}
                  control={<Checkbox name={question.id} />}
                  label={question.fields.question}
                  key={question.fields.question}
                />
              )
            })}
          </FormControl>
        </Grid>
        <Button onClick={handleClick}>Add Questions</Button>
      </Paper>
    </div>
  )
}
