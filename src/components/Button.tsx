import React from 'react'

import Clip from './Clip'
import { Button } from '@material-ui/core'

export default (props: any) => {
  const [element, setElement] = React.useState<any>(null)
  const height = element ? element.clientHeight : 0
  const width = element ? element.clientWidth : 0

  return (
    <Clip
      size={10}
      color="#1559a8"
      height={height}
      width={width}
      padding
      corner={[true, true, true, true]}
    >
      <Button
        {...props}
        ref={input => setElement(input)}
        id="button"
        className="button"
        style={{
          borderRadius: '0',
          border: 'none'
        }}
        color="secondary"
        disableElevation
      >
        {props.children}
      </Button>
    </Clip>
  )
}
