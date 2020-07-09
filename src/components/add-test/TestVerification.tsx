import React, { useContext, useCallback } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { TestContext } from '../../context/TestContext'
import { AirDBContext } from '../../context/AirDBContext'
import { Check, Close } from '@material-ui/icons'
import Button from '../Button'
import TestDisplay from './TestDisplay'

export default () => {
  const { handleAddTest, questions } = useContext(AirDBContext)
  const [test] = useContext(TestContext)

  const [questionIDs, setQuestions] = React.useState<string[]>([])

  const handleChange = useCallback((question: any) => {
    setQuestions(prev => {
      if (!prev.includes(question.fields.ID)) {
        return [...prev, question.fields.ID]
      } else {
        return prev.filter((id: string) => id !== question.fields.ID)
      }
    })
  }, [])

  const addTest = () => {
    handleAddTest({ questionIDs, test })
  }

  return (
    <div>
      <TestDisplay />
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
      <br />
      <Button color="primary" onClick={addTest}>
        Add
      </Button>
    </div>
  )
}
