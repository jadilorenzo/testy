import React from 'react'
import { Button } from '@material-ui/core'
import { AirDBContext } from '../../context/AirDBContext'
import Test from './Test'
import Paper from '../Paper'

export default ({ test, setRedirect, id }: any) => {
  const { postAirDB, users } = React.useContext(AirDBContext)

  const setScore = (score: string) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { id: '' }
    ).id

    postAirDB('Testy - Test Scores', {
      userid,
      score,
      test: id
    })
  }

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
