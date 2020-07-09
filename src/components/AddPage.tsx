import React from 'react'
import { Typography, useTheme, Grid, Button } from '@material-ui/core'
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
          container
          spacing={2}
          justify="space-between"
          direction="row"
          alignItems="stretch"
        >
          <Grid
            container
            item
            style={{
              padding: '1rem',
              borderRadius: '0.5rem',
              background: theme.palette.background.default
            }}
            md={6}
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            onClick={() => props.setRedirect('/add/question')}
          >
            <ShortTextIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div style={{ margin: 1.5, width: 'calc(100% - 10rem)' }}>
              <Typography variant="h6">Add Question</Typography>
              <Typography variant="subtitle1">
                Add a question to your test or to a collection for later.
              </Typography>
            </div>
            <Button
              style={{ borderRadius: '5px' }}
              variant="outlined"
              color="secondary"
            >
              Add
            </Button>
          </Grid>
          <Grid
            container
            item
            md={6}
            style={{
              padding: '1rem',
              borderRadius: '0.5rem',
              background: theme.palette.background.default
            }}
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            onClick={() => props.setRedirect('/add/test')}
          >
            <BarChartIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div style={{ margin: 1.5, width: 'calc(100% - 10rem)' }}>
              <Typography variant="h6">Add Test</Typography>
              <Typography variant="subtitle1">
                Add a test and practice it to your hearts content or share with
                others.
              </Typography>
            </div>
            <Button
              style={{ borderRadius: '5px' }}
              variant="outlined"
              color="secondary"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
