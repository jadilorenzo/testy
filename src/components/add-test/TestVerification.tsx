import React, { useContext, useCallback } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { TestContext } from '../../context/TestContext'
import { AirDBContext } from '../../context/AirDBContext'
import { Check, Close } from '@material-ui/icons'
import Button from '../Button'
import TestDisplay from './TestDisplay'

export default () => {
  const db = useContext(AirDBContext)
  const [test] = useContext(TestContext)

  const [questionIDs, setQuestions] = React.useState<string[]>([])

  const handleChange = useCallback((question: any) => {
    setQuestions(prev => {
      if (!prev.includes(question.id)) {
        return [...prev, question.id]
      } else {
        return prev.filter((id: string) => id !== question.id)
      }
    })
  }, [])

  const handleAddTest = async () => {
    const userid = (
      db.users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { id: '' }
    ).id

    await db
      .postAirDB('Testy - Tests', {
        ...test,
        userid,
        tags: test.tags.join(', '),
        questions: questionIDs.join(', ')
      })
      .then(() => (window.location.pathname = '/'))
  }

  return (
    <div>
      <TestDisplay />
      <FormControl>
        {db.questions.map((question: any) => {
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
      <br />
      <Button color="primary" onClick={handleAddTest}>
        Add
      </Button>
    </div>
  )
}
