import React, { useContext, useState } from 'react'
import { TestsContext } from '../context/TestsContext'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'

import { postDB } from '../context/getDB'
import { Button } from '@material-ui/core'

const Verification = () => {
  const tests = useContext(TestsContext)
  const [question] = useContext(CurrentQuestionContext)

  const [currentTest, setCurrentTest] = useState('recg8fTWLLOM0S5pR')

  console.log(currentTest)

  const handleAddQuestion = async () => {
    const result = await postDB(currentTest, { ...question })
    console.log(result[0].d)
  }

  return (
    <div>
      Which test would you like to add your question to?
      <div className="TestGroup">
        {tests
          .filter((x: any) => Object.keys(x.fields).length > 1)
          .map((x: any) => (
            <Button
              variant="outlined"
              children={x.fields['Name']}
              color={x.id === currentTest ? 'secondary' : 'default'}
              onClick={() => setCurrentTest(x.id)}
            />
          ))}
      </div>
      <Button onClick={handleAddQuestion} variant="contained" color="secondary">
        Add
      </Button>
    </div>
  )
}

export default Verification
