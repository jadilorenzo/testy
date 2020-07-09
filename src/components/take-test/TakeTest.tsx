import React from 'react'
import { Button } from '@material-ui/core'
import { AirDBContext } from '../../context/AirDBContext'
import Test from './Test'
import Paper from '../Paper'

export default ({ test, setRedirect, id }: any) => {
  const { updateAirDB, postAirDB, users, scores } = React.useContext(
    AirDBContext
  )

  const [scoreID, setScoreID] = React.useState(0)

  const userid = (
    users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0] || { fields: { ID: 0 } }
  ).fields.ID

  const scorid = (
    scores.filter(score => score.fields.ID === scoreID)[0] || {
      id: ''
    }
  ).id

  const setScore = (score: string) => {
    updateAirDB('Testy - Test Scores', scorid, { score })
  }

  React.useEffect(() => {
    postAirDB('Testy - Test Scores', {
      userid,
      test: id
    }).then((r: any) => {
      console.log('new-score-record', r)
      setScoreID(r[r.length - 1].fields.ID)
    })
  }, [])

  return (
    <>
      <br />
      <Paper>
        <Test test={test} setScore={setScore} scoreID={scoreID} />
        <Button onClick={() => setRedirect('/')}>End</Button>
      </Paper>
    </>
  )
}
