import React from 'react'
import Page from './Paper'
import { Typography, Grid, Paper, Button, useTheme } from '@material-ui/core'
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
              <Grid item sm={12}>
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
                  <Button
                    onClick={() =>
                      props.setRedirect(`/test/${score.fields.test}`)
                    }
                    variant="text"
                    style={{ marginBottom: '0.2rem' }}
                  >
                    Take again
                  </Button>
                  <Button
                    onClick={() =>
                      props.setRedirect(`/review/test/${score.id}`)
                    }
                    color="primary"
                    variant="text"
                    style={{ marginLeft: '0.2rem', marginBottom: '0.2rem' }}
                  >
                    Review Test
                  </Button>
                  <div
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(-45deg, transparent, transparent 10px, #E0E0E0 10px, #E0E0E0 20px)',
                      borderRadius: 5
                    }}
                  >
                    <Paper
                      style={{
                        padding: '0.2rem',
                        background:
                          JSON.parse(
                            (score.fields.score || '').replace('%', '')
                          ) < 50
                            ? theme.palette.error.light
                            : theme.palette.success.light,
                        minWidth: 30,
                        width: `${JSON.parse(
                          (score.fields.score || '').replace('%', '')
                        )}%`
                      }}
                    >
                      {score.fields.score}
                    </Paper>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          ))}
      </Page>
    </>
  )
}
