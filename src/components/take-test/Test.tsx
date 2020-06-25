import React from 'react'
import Question from './Question'
import { Typography, useTheme } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { AirDBContext } from '../../context/AirDBContext'

export default ({
  test,
  setScore
}: {
  test: { title: string; questions: string }
  setScore: any
}) => {
  const { questions } = React.useContext(AirDBContext)
  const myQuestions = questions.filter(question =>
    test.questions.split(', ').includes(question.id)
  )
  const [score, setCorrectProblems] = React.useState<boolean[]>([])
  const theme = useTheme()

  if (score.filter(x => x !== undefined).length === myQuestions.length) {
    setScore(
      `${Math.round(
        (score.filter(x => x === true).length / myQuestions.length) * 100
      )}%`
    )
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
            {score[index] === true && (
              <Alert
                style={{ marginBottom: '0.5em' }}
                variant="filled"
                color="success"
                severity="success"
              >
                Correct
              </Alert>
            )}
            {score[index] === false && (
              <>
                <Alert
                  style={{ marginBottom: '0.5em' }}
                  color="error"
                  variant="filled"
                  severity="error"
                >
                  Incorrect
                </Alert>
                <div style={{ color: theme.palette.error.main }}>
                  Correct Answer: {question.fields.answer}
                </div>
                <div style={{ height: '0.2rem' }} />
              </>
            )}

            <Question
              question={question.fields}
              submitted={score[index] !== undefined}
              handleSubmit={(value: string) => {
                setCorrectProblems(prev => {
                  console.log(value, question.fields.answer)
                  prev[index] = value === question.fields.answer
                  return prev
                })
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
