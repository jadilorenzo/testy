import React from 'react'
import { Typography, useTheme, Card, Grid, Button } from '@material-ui/core'
import Paper from './Paper'
import BarChartIcon from '@material-ui/icons/BarChart'
import ShortTextIcon from '@material-ui/icons/ShortText'

import { useWindowSize } from '@reach/window-size'

export default (props: any) => {
  const theme = useTheme()
  const { width } = useWindowSize()
  const small = width > 900

  return (
    <>
      <br />
      <Paper>
        <Typography variant="h4">What would you like to add?</Typography>
        <br />
        <Grid
          spacing={2}
          container={small}
          justify="space-between"
          direction="row-reverse"
          alignItems="center"
        >
          <Card
            style={{
              width: small ? '49%' : 'auto',
              padding: '1rem',
              display: 'flex',
              justifyItems: 'center',
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/question')}
          >
            <ShortTextIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div style={{ margin: 1.5, width: '100%' }}>
              <Typography variant="h6">Add Question</Typography>
              <Typography variant="subtitle1">
                Add a question to your test or to a collection for later.
              </Typography>
            </div>
            <Button color="secondary">Add</Button>
          </Card>
          <Card
            style={{
              width: small ? '49%' : 'auto',
              padding: '1rem',
              display: 'flex',
              justifyItems: 'center',
              marginTop: !small ? '0.5rem' : undefined,
              background: theme.palette.background.default
            }}
            onClick={() => props.setRedirect('/add/test')}
          >
            <BarChartIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div style={{ margin: 1.5, width: '100%' }}>
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
