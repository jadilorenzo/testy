import React from 'react'
import { TextField, Radio } from '@material-ui/core'

export default (props: { type: string }) => {
  switch (props.type) {
    case 'multiple-choice':
      return (
        <div>
          <Radio disabled />
          <TextField />
          <br />
          <Radio disabled />
          <TextField />
          <br />
          <Radio disabled />
          <TextField />
          <br />
          <Radio disabled />
          <TextField />
          <br />
        </div>
      )
    default:
      return null
  }
}
