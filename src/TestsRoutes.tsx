import React from 'react'
import { Route } from 'react-router-dom'
import { TuiTestPage } from './components'
import { AirDBContext } from './context/AirDBContext'

export default () => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <div>
      {tests.map((row: any) => (
        <Route path={`/test/${row.id}`}>
          <TuiTestPage test={row.fields} id={row.id} />
        </Route>
      ))}
    </div>
  )
}
