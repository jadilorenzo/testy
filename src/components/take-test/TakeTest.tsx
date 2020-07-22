import React from 'react'
import { Button } from '@material-ui/core'
import { AirDBContext } from '../../context/AirDBContext'
import Test from './Test'
import Paper from '../Paper'

export default ({ test, setRedirect, id }: any) => {
  const { handleSetScore, createInitialScore } = React.useContext(AirDBContext)

  const [scoreID, setScoreID] = React.useState(0)

  const setScore = (score: string) => {
    handleSetScore({ score, scoreID })
  }

  React.useEffect(() => {
    createInitialScore({ setScoreID, id })
  }, [createInitialScore, id])

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
