import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateQuestion,
  TuiCreateTest,
  TuiMain,
  TuiAddQuestionTo,
  TuiAddPage,
  TuiLogin
} from './components'
import { AirDBContext } from './context/AirDBContext'
import TestsRoutes from './TestsRoutes'
import Reroute from './Reroute'

const App = () => {
  const { users } = useContext(AirDBContext)
  const user = users.filter(
    user => user.fields.username === window.localStorage.getItem('username')
  )[0] || { fields: { active: 'false' } }
  const loggedIn = JSON.parse(user.fields.active)

  return (
    <>
      <CssBaseline />
      <div>
        <Reroute
          render={(setRedirect: any) => (
            <>
              {!loggedIn ? (
                <Route exact path="/">
                  <TuiLogin setRedirect={setRedirect} />
                </Route>
              ) : (
                <>
                  <Route exact path="/">
                    <TuiMain setRedirect={setRedirect} />
                  </Route>
                  <Route exact path="/add">
                    <TuiAddPage setRedirect={setRedirect} />
                  </Route>
                  <Route exact path="/add/question">
                    <TuiCreateQuestion />
                  </Route>
                  <Route exact path="/add/test">
                    <TestProvider>
                      <TuiCreateTest />
                    </TestProvider>
                  </Route>
                  <Route exact path="/add/question/to/:id">
                    <TuiAddQuestionTo setRedirect={setRedirect} />
                  </Route>
                </>
              )}
              <TestsRoutes setRedirect={setRedirect} />
              <div style={{ height: '6rem' }} />
            </>
          )}
        />
      </div>
    </>
  )
}

export default App
