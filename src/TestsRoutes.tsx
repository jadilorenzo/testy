import React from 'react'
import { Route } from 'react-router-dom'
import {
  TuiTestPage,
  TuiTakeTest,
  TuiReviewTest,
  TuiCreateQuestion
} from './components'
import { AirDBContext } from './context/AirDBContext'

export default ({ setRedirect }: any) => {
  const { tests, questions, users, scores } = React.useContext(AirDBContext)

  return (
    <div>
      {tests.map((row: any) => {
        return (
          <div key={row.fields.ID}>
            <Route path={`/test/${row.fields.ID}`}>
              <TuiTestPage
                questions={questions}
                setRedirect={setRedirect}
                test={row.fields}
                id={row.fields.ID}
                user={
                  users.filter(user => user.fields.ID === row.fields.userid)[0]
                }
              />
            </Route>
            <Route exact path={`/add/question/to/${row.fields.ID}`}>
              <TuiCreateQuestion setRedirect={setRedirect} id={row.fields.ID} />
            </Route>
            <Route path={`/take/test/${row.fields.ID}`}>
              <TuiTakeTest
                setRedirect={setRedirect}
                test={row.fields}
                id={row.fields.ID}
              />
            </Route>
          </div>
        )
      })}
      {scores.map((score: any, index) => {
        return (
          <div key={index}>
            <Route path={`/review/test/${score.fields.ID}`}>
              <TuiReviewTest setRedirect={setRedirect} id={score.fields.ID} />
            </Route>
          </div>
        )
      })}
    </div>
  )
}
