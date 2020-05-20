import React from 'react'
import MultiOptionQuestionForm from './MultiOptionQuestionForm'

export default (props: { type: string }) => {
  switch (props.type) {
    case 'multiple-choice':
      return <MultiOptionQuestionForm />
    case 'multi-select':
      return null
    default:
      return null
  }
}
