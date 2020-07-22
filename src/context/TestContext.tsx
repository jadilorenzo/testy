import React, { createContext } from 'react'

const initialValue = {
  questions: [],
  title: '',
  tags: []
}

const state = [initialValue, () => {}]

export const TestContext = createContext<any[]>(state)

export const TestProvider = (props: any) => {
  const [test, setTest] = React.useState<any>(initialValue)

  return (
    <TestContext.Provider value={[test, setTest]}>
      {props.children}
    </TestContext.Provider>
  )
}
