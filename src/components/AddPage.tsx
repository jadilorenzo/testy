import React from 'react'
import { Typography, useTheme, Card, Grid, Button } from '@material-ui/core'
import Paper from './Paper'
import BarChartIcon from '@material-ui/icons/BarChart'
import ShortTextIcon from '@material-ui/icons/ShortText'

export default (props: any) => {
  const theme = useTheme()
  return (
    <>
      <br />
      <Paper>
        <Typography variant="h4">What would you like to add?</Typography>
        <br />
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
              display: 'flex',
              justifyItems: 'center',
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/question')}
          >
            <ShortTextIcon style={{ height: '4.5em', width: '4.5em' }} />
            <div style={{ margin: 1.5 }}>
              <Typography variant="h6">Add Question</Typography>
              <Typography variant="subtitle1">
                Add a question to your test or to a collection for later.
              </Typography>
            </div>
            <Button color="secondary">Add</Button>
          </Card>
          <Card
            style={{
              width: '49%',
              padding: '1em',
              display: 'flex',
              justifyItems: 'center',
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/test')}
          >
            <BarChartIcon style={{ height: '4.5em', width: '4.5em' }} />
            <div style={{ margin: 1.5 }}>
              <Typography variant="h6">Add Test</Typography>
              <Typography variant="subtitle1">
                Add a test and practice it to your hearts content or share with
                others.
              </Typography>
            </div>
            <Button color="secondary">Add</Button>
          </Card>
        </Grid>
      </Paper>
    </>
  )
}
