import React from 'react'
import { Typography, useTheme, Card, Grid } from '@material-ui/core'
import Paper from './Paper'

export default (props: any) => {
  const theme = useTheme()
  return (
    <>
      <br />
      <Paper>
        <Typography variant="h4">What would you like to add?</Typography>
        <Grid
          spacing={2}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Card
            style={{
              width: '49%',
              padding: '1em',
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/question')}
          >
            + Question
          </Card>
          <Card
            style={{
              width: '49%',
              padding: '1em',
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/test')}
          >
            + Test
          </Card>
        </Grid>
      </Paper>
    </>
  )
}
