import React, { useContext } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { TestContext } from '../context/TestContext'
import { AirDBContext } from '../context/AirDBContext'
import Button from './Button'
import TestDisplay from './TestDisplay'

export default () => {
  const db = useContext(AirDBContext)
  const [test] = useContext(TestContext)

  const handleAddQuestion = async () => {
    await db
      .postAirDB('Testy - Tests', {
        ...test,
        questions: test.questions.join(', '),
        tags: test.tags.join(', ')
      })
      .then(() => (window.location.pathname = '/'))
  }

  return (
    <div>
      <TestDisplay />
      <FormControl>
        {db.questions.map((x: any) => (
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label={x.fields.question}
            />
          </div>
        ))}
      </FormControl>
      <br />
      <Button onClick={handleAddQuestion} variant="contained" color="primary">
        Add
      </Button>
    </div>
  )
}
