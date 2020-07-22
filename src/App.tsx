import React from 'react'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { TuiLogin, TuiLoader } from './components'
import { AirDBProvider } from './context/AirDBContext'
import TestsRoutes from './TestsRoutes'
import TeacherApp from './TeacherApp'
import StudentApp from './StudentApp'
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
              children={(users: any[], loading: boolean) => {
                const user = users.filter(
                  user =>
                    user.fields.username ===
                    window.localStorage.getItem('username')
                )[0] || { fields: { active: false, type: '' } }
                const loggedIn = user.fields.active
                const userType = user.fields.type

                return (
                  <>
                    {loading ? (
                      <TuiLoader />
                    ) : !loggedIn ? (
                      <Route exact path="/">
                        <TuiLogin setRedirect={setRedirect} users={users} />
                      </Route>
                    ) : userType === 'teacher' ? (
                      <TeacherApp setRedirect={setRedirect} />
                    ) : userType === 'student' ? (
                      <StudentApp setRedirect={setRedirect} />
                    ) : null}
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
