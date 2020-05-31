import React, { useContext } from 'react'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'
import { OptionsContext } from '../context/OptionsContext'

const QuestionDisplay = () => {
  const [question] = useContext(CurrentQuestionContext)
  const [options] = useContext(OptionsContext)

  if (options.type === 'multiple-choice') {
    return (
      <FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Question: {question.question === '' ? 'None' : question.question}
          </FormLabel>
          {question.answer !== '' && (
            <RadioGroup>
              <FormControlLabel
                value={question.options[0]}
                control={<Radio />}
                label={question.options[0]}
              />
              <FormControlLabel
                value={question.options[1]}
                control={<Radio />}
                label={question.options[1]}
              />
              <FormControlLabel
                value={question.options[2]}
                control={<Radio />}
                label={question.options[2]}
              />
              <FormControlLabel
                value={question.options[3]}
                control={<Radio />}
                label={question.options[3]}
              />
            </RadioGroup>
          )}
        </FormControl>
      </FormControl>
    )
  } else {
    return null
  }
}
export default QuestionDisplay
