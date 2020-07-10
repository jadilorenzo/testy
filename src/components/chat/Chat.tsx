import React from 'react'
import TextBubble from './TextBubble'
import Paper from '../Paper'

export default () => {
  return (
    <div>
      <Paper>
        <TextBubble text="Hello World" userid={1} />
        <TextBubble text="Hello!" userid={3} />
      </Paper>
    </div>
  )
}
