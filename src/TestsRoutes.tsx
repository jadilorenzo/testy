import React from 'react'
import { Route } from 'react-router-dom'
import { MuiTestPage } from './components'
import { AirDBContext } from './context/AirDBContext'

export default () => {
  const { tests } = React.useContext(AirDBContext)

  return (
    <div>
      {tests.map((row: any) => (
        <Route path={`/test/${row.id}`}>
          <MuiTestPage test={row.fields} />
        </Route>
      ))}
    </div>
  )
}
