import React from 'react'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateTest,
  TuiMain,
  TuiDisplayCoursesTree,
  TuiLogin,
  TuiScorePage,
  TuiChat,
  TuiSearchPage,
  TuiAddCourse,
  TuiAddChapter,
  TuiAddLesson,
  TuiAddAssignment,
  TuiAddPage
} from './components'
import { AirDBProvider } from './context/AirDBContext'
import { SearchProvider } from './context/SearchContext'
import TestsRoutes from './TestsRoutes'
import Reroute from './Reroute'

const App = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Reroute
          render={(setRedirect: any) => (
            <AirDBProvider
              setRedirect={setRedirect}
              children={(users: any[]) => {
                const user = users.filter(
                  user =>
                    user.fields.username ===
                    window.localStorage.getItem('username')
                )[0] || { fields: { active: false } }
                const loggedIn = user.fields.active

                return (
                  <>
                    {!loggedIn ? (
                      <Route exact path="/">
                        <TuiLogin setRedirect={setRedirect} users={users} />
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
                          <TestProvider>
                            <TuiCreateTest />
                          </TestProvider>
                        </Route>
                        <Route exact path="/search">
                          <TuiSearchPage setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/chat">
                          <TuiChat />
                        </Route>
                        <Route exact path="/courses">
                          <TuiDisplayCoursesTree setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/add/course">
                          <TuiAddCourse setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/add/chapter">
                          <TuiAddChapter setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/add/lesson">
                          <TuiAddLesson setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/add/assignment">
                          <TuiAddAssignment setRedirect={setRedirect} />
                        </Route>
                        <Route exact path="/add/todo">
                          <TuiAddPage setRedirect={setRedirect} />
                        </Route>
                      </SearchProvider>
                    )}
                    <TestsRoutes setRedirect={setRedirect} />
                    <div style={{ height: '6rem' }} />
                  </>
                )
              }}
            />
          )}
        />
      </div>
    </>
  )
}

export default App
