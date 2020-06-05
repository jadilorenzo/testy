import React, { useContext } from 'react'
import { TestContext } from '../context/TestContext'
import { AirDBContext } from '../context/AirDBContext'
// import { Button } from '@material-ui/core'
import Button from './Button'

export default () => {
  const db = useContext(AirDBContext)
  const [test] = useContext(TestContext)

  // const [currentTest, setCurrentTest] = useState('recg8fTWLLOM0S5pR')

  console.log(db.getAirDB('Testy - Tests'))

  const handleAddQuestion = async () => {
    await db
      .postAirDB('Testy - Tests', {})
      .then(() => (window.location.pathname = '/'))
  }

  return (
    <div>
      <Button onClick={handleAddQuestion} variant="contained" color="primary">
        Add
      </Button>
    </div>
  )
}
