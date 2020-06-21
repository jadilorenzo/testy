import React from 'react'
import { Typography } from '@material-ui/core'
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
          <div
            key={row.fields.ID}
            onClick={() => props.setRedirect(`/test/${row.id}`)}
          >
            <TestDisplay
              test={{
                ...row.fields,
                tags: row.fields.tags ? row.fields.tags.split(', ') : [],
                questions: row.fields.questions
                  ? row.fields.questions.split(', ')
                  : []
              }}
            />
          </div>
        ))}
        <br />
      </Paper>
    </>
  )
}
