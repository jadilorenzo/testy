import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateQuestion,
  TuiCreateTest,
  TuiMain,
  TuiAddPage,
  TuiLogin,
  TuiScorePage,
  TuiChat,
  TuiSearchPage
} from './components'
import { AirDBContext } from './context/AirDBContext'
import { SearchProvider } from './context/SearchContext'
import TestsRoutes from './TestsRoutes'
import Reroute from './Reroute'

const App = () => {
  const { users } = useContext(AirDBContext)
  const user = users.filter(
    user => user.fields.username === window.localStorage.getItem('username')
  )[0] || { fields: { active: 'false' } }
  const loggedIn = JSON.parse(user.fields.active || 'false')

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
                <SearchProvider>
                  <Route exact path="/">
                    <TuiMain setRedirect={setRedirect} />
                  </Route>
                  <Route exact path="/scores">
                    <TuiScorePage setRedirect={setRedirect} />
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
                  <Route exact path="/search">
                    <TuiSearchPage />
                  </Route>
                  <Route exact path="/chat">
                    <TuiChat />
                  </Route>
                </SearchProvider>
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
