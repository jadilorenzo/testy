import React from 'react'
import Page from './Paper'
import { Typography, Grid, Paper, useTheme } from '@material-ui/core'
import { AirDBContext } from '../context/AirDBContext'

export default (props: any) => {
  const { scores, tests, users } = React.useContext(AirDBContext)
  const theme = useTheme()
  const userid = (
    users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0] || { id: '' }
  ).id

  console.log(theme.breakpoints.up('xs'))

  return (
    <>
      <br />
      <Page>
        <Typography variant="h5">Your Scores</Typography>
        {scores
          .filter(score => score.fields.userid === userid)
          .reverse()
          .map(score => (
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={7} sm={4}>
                <Paper
                  style={{
                    background: theme.palette.background.default,
                    padding: '0.75rem'
                  }}
                >
                  <Typography variant="h6">
                    {
                      (
                        tests.filter(test => {
                          return test.id === score.fields.test
                        })[0] || {
                          fields: { title: <em>Test not found</em> }
                        }
                      ).fields.title
                    }
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={5} sm={8}>
                <Paper
                  style={{
                    background: theme.palette.background.default,
                    padding: '0.75rem',
                    border: '1px solid',
                    borderColor:
                      JSON.parse(score.fields.score.replace('%', '')) < 50
                        ? theme.palette.error.main
                        : theme.palette.success.main,
                    minWidth: 50,
                    width: `${JSON.parse(score.fields.score.replace('%', ''))}%`
                  }}
                >
                  {score.fields.score}
                </Paper>
              </Grid>
            </Grid>
          ))}
      </Page>
    </>
  )
}
