import React from 'react'
import { Route } from 'react-router-dom'
import { TestProvider } from './context/TestContext'
import {
  TuiCreateTest,
  TuiMain,
  TuiDisplayCoursesTree,
  TuiScorePage,
  TuiChat,
  TuiSearchPage,
  TuiAddCourse,
  TuiAddChapter,
  TuiAddLesson,
  TuiAddAssignment
} from './components'
import { SearchProvider } from './context/SearchContext'

export default ({ setRedirect }: { setRedirect: Function }) => {
  return (
    <SearchProvider>
      <>
        <div style={{ zIndex: 2 }}>
          <Route exact path="/">
            <TuiMain setRedirect={setRedirect} />
          </Route>
          <Route exact path="/scores">
            <TuiScorePage setRedirect={setRedirect} />
          </Route>
          <Route exact path="/add/test">
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
        </div>
      </>
    </SearchProvider>
  )
}
