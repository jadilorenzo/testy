import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import Paper from './Paper'
import Button from './Button'
import TestDisplay from './TestDisplay'
import { AirDBContext } from '../context/AirDBContext'

export default (props: any) => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <>
      <br />

      <Paper>
        <span>
          <Button onClick={() => props.setRedirect('/add/question')}>
            + Question
          </Button>
        </span>
        <br />
        <span>
          <Button onClick={() => props.setRedirect('/add/test')}>+ Test</Button>
        </span>
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
        <br />
      </Paper>
    </>
  )
}
