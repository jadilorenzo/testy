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
import { AirDBContext } from '../context/AirDBContext'
import { Check, Close } from '@material-ui/icons'

export default (props: any) => {
  const { tests, questions, updateAirDB } = React.useContext(AirDBContext)
  const test = tests.filter(test => test.fields.ID === props.id)[0] || {
    fields: { title: '', questions: '' }
  }
  const [questionIDs, setQuestions] = React.useState<string[]>(
    (test.fields.questions || '').split(', ')
  )

  const handleChange = useCallback(
    (question: any) => {
      setQuestions(prev => {
        if (!prev.includes(question.fields.ID)) {
          return [...prev, question.fields.ID]
        } else {
          return prev.filter((id: string) => id !== question.fields.ID)
        }
      })
    },
    [questions]
  )

  const handleClick = () => {
    updateAirDB('Testy - Tests', test.id, {
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
      <Paper style={{ padding: '1rem' }}>
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
                  checked={questionIDs.includes(question.fields.ID)}
                  control={
                    <Checkbox
                      checkedIcon={<Check />}
                      icon={<Close />}
                      name={question.fields.ID}
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
