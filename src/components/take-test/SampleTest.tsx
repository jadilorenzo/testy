import React from 'react'
import Paper from '../Paper'
import Test from './Test'
import { Typography } from '@material-ui/core'

export default () => {
  const [score, setMyScore] = React.useState('')

  const setScore = (score: string) => {
    if (!score.includes('NaN')) {
      setMyScore(score)
    }
  }

  return (
    <div>
      <br />
      <Paper>
        <Typography variant="h4">Sample Test</Typography>
        <Test
          setScore={setScore}
          test={{
            title: 'Sample Test',
            questions: 'reclAWp71LXH6sMlf, recdac7tlAH5sMuUN, rec2aDbwMFG5rtOio'
          }}
        />
        {score}
      </Paper>
    </div>
  )
}
