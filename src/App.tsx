import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import { TuiCreateTest } from './components'
import { AirDBProvider } from './context/AirDBContext'

const App = () => {
  return (
    <AirDBProvider table="Testy">
      <Container>
        <Route exact path="/add/question">
          <TestProvider>
            <TuiCreateTest />
          </TestProvider>
          App
        </Route>
      </Container>
    </AirDBProvider>
  )
}

export default App
