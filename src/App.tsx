import React from 'react'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateQuestion,
  TuiCreateTest,
  TuiMain,
  TuiAddQuestionTo,
  TuiAddPage
} from './components'
import { AirDBProvider } from './context/AirDBContext'
import TestsRoutes from './TestsRoutes'
import Reroute from './Reroute'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AirDBProvider table="Testy - Tests">
        <AirDBProvider table="Testy - Questions">
          <div>
            <Reroute
              render={(setRedirect: any) => (
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
                  <TestsRoutes setRedirect={setRedirect} />
                  <div style={{ height: '6rem' }} />
                </>
              )}
            />
          </div>
        </AirDBProvider>
      </AirDBProvider>
    </>
  )
}

export default App
