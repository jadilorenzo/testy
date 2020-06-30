import React from 'react'
import Question from './Question'
import { Typography, useTheme } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { AirDBContext } from '../../context/AirDBContext'

export default ({
  test,
  setScore,
  id
}: {
  test: { title: string; questions: string }
  setScore: any
  id: string
}) => {
  const { questions, postAirDB } = React.useContext(AirDBContext)
  const myQuestions = questions.filter(question =>
    test.questions.split(', ').includes(question.id)
  )
  const [score, setCorrectProblems] = React.useState<(boolean | undefined)[]>(
    []
  )

  const handleSubmit = (value: string, question: any, index: number) => {
    setCorrectProblems(prev => {
      prev[index] = value === question.fields.answer
      return prev
    })

    if (score.filter(x => x !== undefined).length === myQuestions.length) {
      setScore(
        `${Math.round(
          (score.filter(x => x === true).length / myQuestions.length) * 100
        )}%`
      )
    }
  }

  return (
    <div>
      <Typography variant="h5">{test.title}</Typography>
      {myQuestions.map((question, index) => {
        return (
          <div
            style={{
              border: '0.1rem solid gray',
              padding: '0.5rem',
              borderRadius: 5,
              marginBottom: '0.2em'
            }}
          >
            <Question
              question={question.fields}
              submitted={score[index] !== undefined}
              correct={score[index]}
              handleSubmit={(value: string) => {
                handleSubmit(value, question, index)
                postAirDB('Testy - Test Instances', {
                  answer: value,
                  'correct answer': question.fields.answer,
                  correct: JSON.stringify(question.fields.answer === value),
                  testid: id
                }).then((r: any) => console.log(r))
              }}
            />
          </div>
        )
      })}
      {score.filter(x => x !== undefined).length === myQuestions.length && (
        <Alert
          style={{ marginBottom: '0.5em' }}
          variant="outlined"
          severity="info"
        >
          Your score is{' '}
          {Math.round(
            (score.filter(x => x === true).length / myQuestions.length) * 100
          )}
          %
        </Alert>
      )}
    </div>
  )
}
