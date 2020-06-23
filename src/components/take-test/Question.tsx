import React from 'react'
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

const Question = ({
  question,
  handlers,
  handleSubmit,
  value,
  type,
  submitted
}: any) => {
  if (question.type === 'multiple-choice' || question.type === 'multi-answer') {
    return (
      <FormControl style={{ width: '100%' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {question.question === '' ? 'None' : question.question}
          </FormLabel>
          {question.answer !== '' && (
            <RadioGroup value={value}>
              <FormControlLabel
                onClick={handlers[0]}
                value={question.question[0]}
                control={
                  question.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.question[0]}
              />
              <FormControlLabel
                onClick={handlers[1]}
                value={question.question[1]}
                control={
                  question.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.question[1]}
              />
              <FormControlLabel
                onClick={handlers[2]}
                value={question.question[2]}
                control={
                  question.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.question[2]}
              />
              <FormControlLabel
                onClick={handlers[3]}
                value={question.question[3]}
                control={
                  question.type !== 'multi-answer' ? <Radio /> : <Checkbox />
                }
                label={question.question[3]}
              />
            </RadioGroup>
          )}
        </FormControl>
        <br />
        <FormControl>
          {question.autocheck !== '' && question.answer !== '' && (
            <Button color="secondary" variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </FormControl>
      </FormControl>
    )
  } else {
    return (
      <FormControl style={{ width: '100%' }}>
        {question.question === '' ? 'None' : question.question}
        <FormControl style={{ marginTop: '1em' }}>
          <TextField
            value={value}
            type={type}
            onChange={handlers[0]}
            variant="outlined"
            label="Answer"
          />
        </FormControl>
        <br />
        {question.autocheck !== '' && question.answer !== '' && (
          <Button
            color="secondary"
            variant="outlined"
            disabled={submitted}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </FormControl>
    )
  }
}
export default Question
