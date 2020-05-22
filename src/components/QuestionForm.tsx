import React from 'react'
import MultiOptionQuestionForm from './MultiOptionQuestionForm'
import EssayQuestionForm from './EssayQuestionForm'

export default (props: { type: string }) => {
  switch (props.type) {
    case 'multiple-choice':
      return <MultiOptionQuestionForm />
    case 'multi-select':
      return <EssayQuestionForm />
    default:
      return null
  }
}
