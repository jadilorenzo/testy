import React, { useContext } from 'react'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  TextField,
  Button
} from '@material-ui/core'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'
import { OptionsContext } from '../context/OptionsContext'

const QuestionDisplay = () => {
  const [question] = useContext(CurrentQuestionContext)
  const [options] = useContext(OptionsContext)

  if (options.type === 'multiple-choice' || options.type === 'multi-answer') {
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
                control={
                  options.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.options[0]}
              />
              <FormControlLabel
                value={question.options[1]}
                control={
                  options.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.options[1]}
              />
              <FormControlLabel
                value={question.options[2]}
                control={
                  options.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.options[2]}
              />
              <FormControlLabel
                value={question.options[3]}
                control={
                  options.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.options[3]}
              />
            </RadioGroup>
          )}
        </FormControl>
        <FormControl>
          {options.autocheck !== '' && question.answer !== '' && (
            <Button color="secondary" variant="outlined">
              Check
            </Button>
          )}
        </FormControl>
      </FormControl>
    )
  } else {
    return (
      <FormControl>
        Question: {question.question === '' ? 'None' : question.question}
        <FormControl style={{ marginTop: '1em' }}>
          <TextField variant="outlined" label="Answer" />
        </FormControl>
      </FormControl>
    )
  }
}
export default QuestionDisplay
