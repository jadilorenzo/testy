import React from 'react'

import { useTheme } from '@material-ui/core'

export default (props: any) => {
  const theme = useTheme()
  return (
    <div>
      <div
        style={{
          background: theme.palette.background.paper,
          borderRadius: '0',
          width: '100%',
          border: 'none'
        }}
      >
        <svg
          style={{
            width: 30,
            height: 30,
            display: 'x',
            zIndex: 100
          }}
        >
          <polygon
            points={`0,0 ${30},00, 00,${30}`}
            fill={theme.palette.background.default}
          />
        </svg>
        <div style={{ margin: '1rem', marginTop: -10 }}>{props.children}</div>
        <br />
      </div>
    </div>
  )
}
