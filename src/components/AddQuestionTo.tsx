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
import { Check, Close } from '@material-ui/icons'

export default (props: any) => {
  const { id } = useParams()
  const { tests, questions, updateAirDB } = React.useContext(AirDBContext)
  const test = tests.filter(test => test.id === id)[0] || {
    fields: { title: '', questions: '' }
  }
  const [questionIDs, setQuestions] = React.useState<string[]>(
    (test.fields.questions || '').split(', ')
  )

  const handleChange = useCallback(
    (question: any) => {
      setQuestions(prev => {
        if (!prev.includes(question.id)) {
          return [...prev, question.id]
        } else {
          return prev.filter((id: string) => id !== question.id)
        }
      })
    },
    [questions]
  )

  const handleClick = () => {
    updateAirDB('Testy - Tests', id, {
      questions: questionIDs.join(', ')
    }).then(() => {
      props.setRedirect('/')
    })
  }

  React.useEffect(() => {
    setQuestions((test.fields.questions || '').split(', '))
  }, [test.fields.questions])

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
                  control={
                    <Checkbox
                      checkedIcon={<Check />}
                      icon={<Close />}
                      name={question.id}
                    />
                  }
                  label={question.fields.question}
                  key={question.fields.question}
                />
              )
            })}
          </FormControl>
        </Grid>
        <Button color="primary" onClick={handleClick}>
          Add Questions
        </Button>
      </Paper>
    </div>
  )
}
