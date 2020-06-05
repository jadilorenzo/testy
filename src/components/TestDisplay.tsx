import React from 'react'
import { TestContext } from '../context/TestContext'
import { Typography, Card, Chip } from '@material-ui/core'

export default () => {
  const [test] = React.useContext(TestContext)
  return (
    <Card
      elevation={0}
      variant="outlined"
      style={{ marginBottom: '0.5em', padding: '0.5em' }}
    >
      <Typography variant="h6">{test.title || 'Untitled'}</Typography>
      {test.tags.length > 0 ? (
        test.tags.map((x: string) => (
          <Chip label={x} style={{ marginRight: '0.5em' }} />
        ))
      ) : (
        <em>No tags</em>
      )}
    </Card>
  )
}
