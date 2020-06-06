import React from 'react'
import { Container } from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './TestDisplay'
import { AirDBContext } from '../context/AirDBContext'

export default () => {
  const [tests, setTests] = React.useState([])
  const { getAirDB } = React.useContext(AirDBContext)

  React.useEffect(() => {
    getAirDB('Testy - Tests').then((r: any) => setTests(r))
  }, [])

  return (
    <Container>
      <br />
      <Paper style={{ padding: '1em' }}>
        {tests.map((row: any) => (
          <TestDisplay
            test={{
              ...row.fields,
              tags: row.fields.tags ? row.fields.tags.split(', ') : [],
              questions: row.fields.questions
                ? row.fields.questions.split(', ')
                : []
            }}
          />
        ))}
      </Paper>
    </Container>
  )
}
