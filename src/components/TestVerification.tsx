import React, { useContext } from 'react'
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
      <Button onClick={handleAddQuestion} variant="contained" color="primary">
        Add
      </Button>
    </div>
  )
}
