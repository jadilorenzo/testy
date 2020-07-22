import React from 'react'
import { Route } from 'react-router-dom'
import { TuiMain, TuiStudentCourses, TuiScorePage } from './components'
import { AirDBContext } from './context/AirDBContext'

export default ({ setRedirect }: { setRedirect: Function }) => {
  const { courses } = React.useContext(AirDBContext)

  return (
    <>
      <div style={{ zIndex: 2 }}>
        <Route exact path="/">
          <TuiMain setRedirect={setRedirect} student />
        </Route>
        <Route exact path="/courses">
          <TuiStudentCourses setRedirect={setRedirect} />
        </Route>
        {courses.map(course => (
          <Route eact path={`/course/${course.fields.ID}`}>
            course.fields.ID: {course.fields.ID}
          </Route>
        ))}
        <Route exact path="/scores">
          <TuiScorePage setRedirect={setRedirect} />
        </Route>
      </div>
    </>
  )
}
