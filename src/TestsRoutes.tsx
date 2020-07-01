import React from 'react'
import { Route } from 'react-router-dom'
import { TuiTestPage, TuiTakeTest, TuiReviewTest } from './components'
import { AirDBContext } from './context/AirDBContext'

export default ({ setRedirect }: any) => {
  const { tests, questions, users, scores } = React.useContext(AirDBContext)

  return (
    <div>
      {tests.map((row: any) => {
        return (
          <>
            <Route path={`/test/${row.id}`}>
              <TuiTestPage
                questions={questions}
                setRedirect={setRedirect}
                test={row.fields}
                id={row.id}
                user={users.filter(user => user.id === row.fields.userid)[0]}
              />
            </Route>
            <Route path={`/take/test/${row.id}`}>
              <TuiTakeTest
                setRedirect={setRedirect}
                test={row.fields}
                id={row.id}
              />
            </Route>
          </>
        )
      })}
      {scores.map((score: any) => {
        return (
          <Route path={`/review/test/${score.id}`}>
            <TuiReviewTest setRedirect={setRedirect} id={score.id} />
          </Route>
        )
      })}
    </div>
  )
}
