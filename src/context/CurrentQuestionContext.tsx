import React, { createContext } from 'react'

const defaultValue: any = {
  question: '',
  answer: '',
  options: []
}

export const CurrentQuestionContext = createContext<any[]>([
  defaultValue,
  () => {}
])

export const CurrentQuestionContextProvider = (props: any) => {
  const [question, setQuestion] = React.useState(defaultValue)

  console.log(question)

  return (
    <CurrentQuestionContext.Provider value={[question, setQuestion]}>
      {props.children}
    </CurrentQuestionContext.Provider>
  )
}
