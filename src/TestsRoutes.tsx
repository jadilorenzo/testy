import React from 'react'
import { Route } from 'react-router-dom'
import { TuiTestPage } from './components'
import { AirDBContext } from './context/AirDBContext'

export default ({ setRedirect }: any) => {
  const { tests, questions } = React.useContext(AirDBContext)

  return (
    <div>
      {tests.map((row: any) => (
        <Route path={`/test/${row.id}`}>
          <TuiTestPage
            questions={questions}
            setRedirect={setRedirect}
            test={row.fields}
            id={row.id}
          />
        </Route>
      ))}
    </div>
  )
}
