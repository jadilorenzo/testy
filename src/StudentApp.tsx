import React from 'react'
import { Route } from 'react-router-dom'
import { TuiMain } from './components'

export default ({ setRedirect }: { setRedirect: Function }) => {
  return (
    <>
      <div style={{ zIndex: 2 }}>
        <Route exact path="/">
          <TuiMain setRedirect={setRedirect} student />
        </Route>
      </div>
    </>
  )
}
