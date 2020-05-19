import React, { createContext } from 'react'
import { Test } from '../types'

const initial = {
  questions: [],
  title: 'Initial Test'
}

export const TestContext = createContext<Test>(initial)

export const TestProvider = (props: any) => {
  return (
    <TestContext.Provider value={initial}>
      {props.children}
    </TestContext.Provider>
  )
}
