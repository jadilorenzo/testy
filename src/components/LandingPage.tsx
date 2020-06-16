import React from 'react'
import { Typography, Button, ButtonGroup } from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './TestDisplay'
import { AirDBContext } from '../context/AirDBContext'

export default (props: any) => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <>
      <br />

      <Paper>
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
