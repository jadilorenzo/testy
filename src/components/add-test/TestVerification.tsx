import React, { useContext, useCallback } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { TestContext } from '../../context/TestContext'
import { AirDBContext } from '../../context/AirDBContext'
import { Check, Close, ChevronRightRounded } from '@material-ui/icons'
import Button from '../Button'
import TestDisplay from './TestDisplay'

export default (props: { setRedirect: Function }) => {
  const { handleAddTest } = useContext(AirDBContext)
  const [test] = useContext(TestContext)

  const addTest = () => {
    handleAddTest({ test })
  }

  return (
    <div>
      <TestDisplay />
      <br />
      <Button
        color="primary"
        onClick={() => addTest()}
        endIcon={<ChevronRightRounded />}
      >
        Add Question
      </Button>
    </div>
  )
}
