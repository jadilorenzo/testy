import React, { createContext } from 'react'
import { Test } from '../types'

const initialValue = {
  questions: [],
  title: '',
  tags: []
}

const state = [initialValue, () => {}]

export const TestContext = createContext<any[]>(state)

export const TestProvider = (props: any) => {
  const [test, setTest] = React.useState<Test>(initialValue)

  return (
    <TestContext.Provider value={[test, setTest]}>
      {props.children}
    </TestContext.Provider>
  )
}
