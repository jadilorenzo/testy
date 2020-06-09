import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './TestDisplay'
import { AirDBContext } from '../context/AirDBContext'

export default () => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <Container>
      <br />
      <Paper style={{ padding: '1em' }}>
        <Typography variant="h4">Recent Tests</Typography>
        {tests.map((row: any) => (
          <Link key={row.fields.ID} to={`/test/${row.id}`}>
            <TestDisplay
              test={{
                ...row.fields,
                tags: row.fields.tags ? row.fields.tags.split(', ') : [],
                questions: row.fields.questions
                  ? row.fields.questions.split(', ')
                  : []
              }}
            />
          </Link>
        ))}
      </Paper>
    </Container>
  )
}
