import React from 'react'

import { useTheme } from '@material-ui/core'

export default (props: any) => {
  const theme = useTheme()
  return (
    <div style={{ width: '85%', margin: 'auto' }}>
      <div
        className="paper-container"
        style={{
          background: theme.palette.background.paper
        }}
      >
        <div>{props.children}</div>
      </div>
    </div>
  )
}
