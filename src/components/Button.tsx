import React from 'react'

import Clip from './Clip'
import { Button } from '@material-ui/core'

export default (props: any) => {
  const [element, setElement] = React.useState<any>(null)
  const height = element ? element.clientHeight : 0
  const width = element ? element.clientWidth : 0

  return (
    <Button
      {...props}
      ref={input => setElement(input)}
      id="button"
      className="button"
      color="secondary"
      variant="contained"
      style={{
        ...{
          marginBottom: '0.5em'
          // border: '1px solid black'
        }
      }}
      disableElevation
    >
      {props.children}
    </Button>
  )
}
