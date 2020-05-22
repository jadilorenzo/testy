import React, { useContext } from 'react'
import { TextField, Checkbox, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'
import { Question } from '../types'

export default () => {
  const [question, setQuestion] = useContext(CurrentQuestionContext)

  const handleTitleChange = (e: any) => {
    e.persist()
    setQuestion((q: Question) => ({
      ...q,
      question: e.target.value
    }))
  }

  const handleOptionChange = (e: any, num: number) => {
    e.persist()
    let options = question.options
    options[num] = e.target.value
    setQuestion((q: Question) => ({ ...q, options }))
  }

  const handleAnswerChange = (e: any) => {
    e.persist()
    setQuestion((q: Question) => ({
      ...q,
      answer: e.target.value
    }))
  }

  console.log(question.options)

  return (
    <div className="QuestionFormContainer">
      <div>
        <TextField
          variant="outlined"
          value={question.question}
          label="Question"
          fullWidth
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[0]}
          onChange={(e: any) => handleOptionChange(e, 0)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[1]}
          onChange={(e: any) => handleOptionChange(e, 1)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[2]}
          onChange={(e: any) => handleOptionChange(e, 2)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[3]}
          onChange={(e: any) => handleOptionChange(e, 3)}
        />
      </div>
      <Autocomplete
        options={question.options}
        multiple
        id="tags-standard"
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={params => (
          <TextField
            {...params}
            value={question.answer}
            onChange={handleAnswerChange}
            label="Answer"
            variant="outlined"
          />
        )}
      />
    </div>
  )
}
