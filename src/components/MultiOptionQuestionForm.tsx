import React, { useContext } from 'react'
import { TextField, Radio } from '@material-ui/core'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'

export default () => {
  const [question, setQuestion] = useContext(CurrentQuestionContext)

  const handleTitleChange = (e: any) => {
    setQuestion((prev: any) => {
      prev.title = e.target.value
      return prev
    })
  }

  const handleOptionChange = (e: any, num: number) => {
    setQuestion((prev: any) => {
      prev.options[num] = e.target.value
      return prev
    })
  }

  return (
    <div className="QuestionFormContainer">
      <div>
        <TextField
          variant="outlined"
          value={question.title}
          fullWidth
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[0]}
          onChange={(e: any) => handleOptionChange(e, 0)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[1]}
          onChange={(e: any) => handleOptionChange(e, 1)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[2]}
          onChange={(e: any) => handleOptionChange(e, 2)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[3]}
          onChange={(e: any) => handleOptionChange(e, 3)}
        />
      </div>
    </div>
  )
}
