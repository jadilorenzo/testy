import React, { useContext } from 'react'
import { CurrentQuestionContext } from '../../context/CurrentQuestionContext'
import { OptionsContext } from '../../context/OptionsContext'
import QuestionDisplay from './QuestionDisplay'
import { AirDBContext } from '../../context/AirDBContext'
import { Button } from '@material-ui/core'

const Verification = () => {
  const db = useContext(AirDBContext)
  const [question] = useContext(CurrentQuestionContext)
  const [options] = useContext(OptionsContext)

  const handleAddQuestion = async () => {
    const userid = (
      db.users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { id: '' }
    ).id

    await db
      .postAirDB('Testy - Questions', {
        ...question,
        userid,
        options: question.options
          .sort()
          .map((x: string) => x.trim())
          .join(', '),
        type: options.type,
        autocheck: JSON.stringify(options.autocheck)
      })
      .then(() => (window.location.pathname = '/'))
  }

  return (
    <div>
      <div className="TestGroup">
        <QuestionDisplay />
      </div>
      <Button onClick={handleAddQuestion} color="primary">
        Add
      </Button>
    </div>
  )
}

export default Verification
