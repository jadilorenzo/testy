import React, { useContext } from 'react'
import { CurrentQuestionContext } from '../../context/CurrentQuestionContext'
import { OptionsContext } from '../../context/OptionsContext'
import QuestionDisplay from './QuestionDisplay'
import { AirDBContext } from '../../context/AirDBContext'
import Button from '../Button'

const Verification = () => {
  const { addQuestion } = useContext(AirDBContext)
  const [question] = useContext(CurrentQuestionContext)
  const [options] = useContext(OptionsContext)

  const handleAddQuestion = async () => {
    await addQuestion({ question, options }).then(
      () => (window.location.pathname = '/')
    )
  }

  return (
    <div>
      <div className="TestGroup">
        <QuestionDisplay />
      </div>
      <Button onClick={handleAddQuestion} color="primary">
        Add
      </Button>
    </div>
  )
}

export default Verification
