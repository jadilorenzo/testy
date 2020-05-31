import React, { useContext, useState } from 'react'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'
import QuestionDisplay from '../components/QuestionDisplay'
import { AirDBContext } from '../context/AirDBContext'
import { Button } from '@material-ui/core'

const Verification = () => {
  const db = useContext(AirDBContext)
  const [question] = useContext(CurrentQuestionContext)

  // const [currentTest, setCurrentTest] = useState('recg8fTWLLOM0S5pR')

  console.log(db.getAirDB())

  const handleAddQuestion = async () => {
    await db
      .postAirDB({
        ...question,
        options: question.options.map((x: string) => x.trim()).join(', ')
      })
      .then(() => (window.location.pathname = '/'))
  }

  return (
    <div>
      <div className="TestGroup">
        <QuestionDisplay />
      </div>
      <Button onClick={handleAddQuestion} variant="contained" color="secondary">
        Add
      </Button>
    </div>
  )
}

export default Verification
