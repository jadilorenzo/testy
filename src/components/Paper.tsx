import React from 'react'

import Clip from './Clip'
import { Card } from '@material-ui/core'

export default (props: any) => {
  const [element, setElement] = React.useState<any>(null)
  const height = element ? element.clientHeight : 0
  const width = element ? element.clientWidth : 0

  return (
    <div style={{ width: 'calc(100%)', margin: 'auto' }}>
      <Clip
        size={30}
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
            ...props.style,
            position: 'relative',
            borderRadius: '0',
            left: 30,
            width: 'calc(100%)',
            border: 'none'
          }}
          elevation={0}
        >
          {props.children}
        </Card>
      </Clip>
    </div>
  )
}
