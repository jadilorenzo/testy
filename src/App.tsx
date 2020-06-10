import React from 'react'
import { Route } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateQuestion,
  TuiCreateTest,
  TuiMain,
  TuiAddQuestionTo
} from './components'
import { AirDBProvider } from './context/AirDBContext'
import TestsRoutes from './TestsRoutes'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AirDBProvider table="Testy - Tests">
        <AirDBProvider table="Testy - Questions">
          <Container>
            <Route exact path="/">
              <TuiMain />
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
              <TuiAddQuestionTo />
            </Route>
            <TestsRoutes />
          </Container>
        </AirDBProvider>
      </AirDBProvider>
    </>
  )
}

export default App
