import React from 'react'
import { Container } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import { TuiCreateTest } from './components'
const App = () => {
  return (
    <Container>
      <TestProvider>
        <TuiCreateTest />
      </TestProvider>
      App
    </Container>
  )
}

export default App
