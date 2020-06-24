import React from 'react'
import { Typography } from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './add-test/TestDisplay'
import { AirDBContext } from '../context/AirDBContext'

export default (props: any) => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <>
      <br />
      <Paper>
        <Typography variant="h5">Recent Tests</Typography>
        {tests.map((row: any) => (
          <div
            key={row.fields.ID}
            style={{ width: '100%' }}
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
      </Paper>
    </>
  )
}
