import React, { createContext } from 'react'
import { Question } from '../types'

const defaultValue: Question = {
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

  return (
    <CurrentQuestionContext.Provider value={[question, setQuestion]}>
      {props.children}
    </CurrentQuestionContext.Provider>
  )
}
