import React from 'react'
import { Button } from '@material-ui/core'
import { AirDBContext } from '../../context/AirDBContext'
import Test from './Test'
import Paper from '../Paper'

export default ({ test, setRedirect, id }: any) => {
  const { updateAirDB, postAirDB, users } = React.useContext(AirDBContext)

  const [scoreID, setScoreID] = React.useState<string>('')

  const userid = (
    users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0] || { id: 'x' }
  ).id

  const setScore = (score: string) => {
    updateAirDB('Testy - Test Scores', scoreID, { score })
  }

  React.useEffect(() => {
    postAirDB('Testy - Test Scores', { userid, test: id, score: '' })
      .catch((r: any) => {
        console.error(r)
        return r
      })
      .then((r: any) => setScoreID(r[0].id))
  }, [])

  return (
    <>
      <br />
      <Paper>
        <Test test={test} setScore={setScore} id={id} />
        <Button onClick={() => setRedirect('/')}>End</Button>
      </Paper>
    </>
  )
}
