import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import { TuiCreateTest } from './components'
import { AirDBProvider } from './context/AirDBContext'

const App = () => {
  return (
    <AirDBProvider table="Testy - Tests">
      <AirDBProvider table="Testy - Questions">
        <Container>
          <Route exact path="/add/question">
            <TestProvider>
              <TuiCreateTest />
            </TestProvider>
          </Route>
          <Route exact path="/"></Route>
        </Container>
      </AirDBProvider>
    </AirDBProvider>
  )
}

export default App
