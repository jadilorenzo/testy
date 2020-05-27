import React, { createContext, useEffect } from 'react'
import getDB from './getDB'

const initial: any[] = []

export const TestsContext = createContext(initial)

export const TestsProvider = (props: any) => {
  const [tests, setTests] = React.useState<any>([])

  useEffect(() => {
    getDB().then(r => setTests(r))
  }, [])

  return (
    <TestsContext.Provider value={tests}>
      {props.children}
    </TestsContext.Provider>
  )
}
