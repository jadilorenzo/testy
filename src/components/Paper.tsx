import React from 'react'

import { Paper } from '@material-ui/core'

export default (props: any) => {
  return (
    <div style={{}}>
      <div
        style={{
          // position: 'relative',
          background: '#1574d2',
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
          <polygon points={`0,0 ${30},00, 00,${30}`} fill={'#1263c0'} />
        </svg>
        <div style={{ margin: '1rem', marginTop: -10 }}>{props.children}</div>
        <br />
      </div>
    </div>
  )
}
