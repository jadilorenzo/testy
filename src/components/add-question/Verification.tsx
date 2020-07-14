import React, { useContext } from 'react'
import { CurrentQuestionContext } from '../../context/CurrentQuestionContext'
import { OptionsContext } from '../../context/OptionsContext'
import QuestionDisplay from './QuestionDisplay'
import { AirDBContext } from '../../context/AirDBContext'
import Button from '../Button'

const Verification = (props: { id: number; setRedirect: Function }) => {
  const { handleAddQuestion, updateTestQuestions, tests } = useContext(
    AirDBContext
  )
  const [question] = useContext(CurrentQuestionContext)
  const [options] = useContext(OptionsContext)
  const questions =
    tests.filter(test => test.fields.ID === props.id)[0].fields.questions || ''
  const testid = tests.filter(test => test.fields.ID === props.id)[0].id

  const addQuestion = async () => {
    await handleAddQuestion({ question, options }).then((id: number) =>
      updateTestQuestions({
        test: { id: testid },
        questionIDs: [...questions.split(', '), id]
      })
    )
  }

  return (
    <div>
      <div className="TestGroup">
        <QuestionDisplay />
      </div>
      <Button onClick={addQuestion} color="primary">
        Add
      </Button>
    </div>
  )
}
export default Verification
