import React from 'react'

import Clip from './Clip'
import { Card } from '@material-ui/core'

export default (props: any) => {
  const [element, setElement] = React.useState<any>(null)
  const height = element ? element.clientHeight : 0
  const width = element ? element.clientWidth : 0
  console.log(height, width)

  return (
    <Clip
      size={50}
      color="#00558c"
      height={height}
      width={width}
      padding={false}
      corner={[true, false, false, false]}
    >
      <Card
        {...props}
        ref={input => setElement(input)}
        style={{
          borderRadius: '0',
          border: 'none',
          width: '100%',
          margin: 'auto'
        }}
        elevation={0}
      >
        {props.children}
      </Card>
    </Clip>
  )
}
