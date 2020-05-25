import React from 'react'
import MultiOptionQuestionForm from './MultiOptionQuestionForm'
import EssayQuestionForm from './EssayQuestionForm'
import MultiSelectQuestionForm from './MultiSelectQuestionForm'

export default (props: { type: string }) => {
  switch (props.type) {
    case 'multiple-choice':
      return <MultiOptionQuestionForm />
    case 'essay':
      return <EssayQuestionForm />
    case 'multi-answer':
      return <MultiSelectQuestionForm />
    default:
      return null
  }
}
