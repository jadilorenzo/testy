import React from 'react'
import Page from '../Paper'
import { Typography, Paper, Avatar, Grid, useTheme } from '@material-ui/core'
import { CheckRounded, CloseRounded } from '@material-ui/icons'
import { AirDBContext } from '../../context/AirDBContext'

export default (props: { id: string; setRedirect: any }) => {
  const { testInstances, scores, tests } = React.useContext(AirDBContext)
  const questions = testInstances.filter(
    test => test.fields.scoreid === props.id
  )
  const theme = useTheme()

  const scoreid = (questions[0] || { fields: { scoreid: 'x' } }).fields.scoreid
  const testid = (
    scores.filter(score => score.fields.ID === scoreid)[0] || {
      fields: { test: 'testid' }
    }
  ).fields.test

  const title = (
    tests.filter(test => test.fields.ID === testid)[0] || {
      fields: { title: 'title' }
    }
  ).fields.title

  return (
    <>
      <br />
      <Page>
        <Typography variant="h5">{title}</Typography>
        {questions.map((question, index) => {
          const correct = `${question.fields.correct || 'false'}`

          return (
            <div style={{ marginBottom: '0.2rem' }}>
              <Paper key={index}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Avatar
                    style={{
                      marginRight: '1rem',
                      background: correct
                        ? theme.palette.success.main
                        : theme.palette.error.main
                    }}
                  >
                    {correct ? <CheckRounded /> : <CloseRounded />}
                  </Avatar>
                  <div>
                    <Typography variant="h6">
                      {question.fields.question}
                    </Typography>
                    {!correct ? (
                      <>
                        <div>You put: '{question.fields.answer}'</div>
                        <div>
                          The correct answer is: '
                          {question.fields['correct answer']}'
                        </div>
                      </>
                    ) : (
                      <div>
                        The correct answer is: '
                        {question.fields['correct answer']}'
                      </div>
                    )}
                  </div>
                </Grid>
              </Paper>
            </div>
          )
        })}
      </Page>
    </>
  )
}
