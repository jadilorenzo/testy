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
  handleSubmit,
  type,
  submitted
}: {
  question: {
    question: string
    type: 'multiple-choice' | 'multi-answer' | 'essay'
    autocheck: string
    options?: string
    answer?: string
  }
  handleSubmit?: any
  type?: string
  submitted?: boolean
}) => {
  const [answer, setAnswer] = React.useState('')

  const handleAnswer = (answer: string) => {
    if (question.type !== 'multi-answer') {
      setAnswer(answer)
    } else {
      setAnswer(prev => {
        const previous = prev.split(', ').filter((x: string) => x !== '')

        let newArray: string[] = []

        if (!prev.split(', ').includes(answer)) {
          newArray = [...previous, answer]
        } else {
          newArray = previous.filter((item: string) => item !== answer)
        }

        return newArray.sort().join(', ')
      })
    }
  }

  if (question.type === 'multiple-choice' || question.type === 'multi-answer') {
    return (
      <FormControl style={{ width: '100%' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {question.question === '' ? 'None' : question.question}
          </FormLabel>
          <div style={{ height: '0.2rem' }} />
          {question.answer !== '' && (
            <RadioGroup value={answer}>
              <FormControlLabel
                onClick={() =>
                  handleAnswer((question.options || '').split(', ')[0])
                }
                value={(question.options || '').split(', ')[0]}
                control={
                  question.type !== 'multi-answer' ? (
                    <Radio disabled={submitted} />
                  ) : (
                    <Checkbox disabled={submitted} />
                  )
                }
                label={(question.options || '').split(', ')[0]}
              />
              <FormControlLabel
                onClick={() =>
                  handleAnswer((question.options || '').split(', ')[1])
                }
                value={(question.options || '').split(', ')[1]}
                control={
                  question.type !== 'multi-answer' ? (
                    <Radio disabled={submitted} />
                  ) : (
                    <Checkbox disabled={submitted} />
                  )
                }
                label={(question.options || '').split(', ')[1]}
              />
              <FormControlLabel
                onClick={() =>
                  handleAnswer((question.options || '').split(', ')[2])
                }
                value={(question.options || '').split(', ')[2]}
                control={
                  question.type !== 'multi-answer' ? (
                    <Radio disabled={submitted} />
                  ) : (
                    <Checkbox disabled={submitted} />
                  )
                }
                label={(question.options || '').split(', ')[2]}
              />
              <FormControlLabel
                onClick={() =>
                  handleAnswer((question.options || '').split(', ')[3])
                }
                value={(question.options || '').split(', ')[3]}
                control={
                  question.type !== 'multi-answer' ? (
                    <Radio disabled={submitted} />
                  ) : (
                    <Checkbox disabled={submitted} />
                  )
                }
                label={(question.options || '').split(', ')[3]}
              />
            </RadioGroup>
          )}
        </FormControl>
        <div style={{ height: '0.2rem' }} />
        <FormControl>
          {question.autocheck !== 'false' && question.answer !== '' && (
            <Button
              color="secondary"
              variant="outlined"
              disabled={submitted}
              onClick={() => handleSubmit(answer)}
            >
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
            value={answer}
            type={type}
            disabled={submitted}
            onChange={e => handleAnswer(e.target.value)}
            variant="outlined"
            label="Answer"
          />
        </FormControl>
        <div style={{ height: '0.2rem' }} />
        {question.autocheck !== 'false' && question.answer !== '' && (
          <Button
            color="secondary"
            variant="outlined"
            disabled={submitted}
            onClick={() => handleSubmit(answer)}
          >
            Submit
          </Button>
        )}
      </FormControl>
    )
  }
}
export default Question
