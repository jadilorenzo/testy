import React from 'react'
import Paper from './Paper'
import { Typography } from '@material-ui/core'
import { AirDBContext } from '../context/AirDBContext'

export default ({ setRedirect }: { setRedirect: Function }) => {
  const { courses } = React.useContext(AirDBContext)

  return (
    <Paper>
      <Typography variant="h4">Your Courses</Typography>
      <div className="course-items">
        {courses.map(course => {
          const url = (course.fields.img || [{ url: '' }])[0].url

          return (
            <div className="course-item">
              <div
                className="course-group"
                onClick={() => setRedirect(`/course/${course.fields.ID}`)}
                style={{ borderBottom: `3px solid ${course.fields.color}` }}
              >
                <img src={url} style={{ height: '7.5rem' }} />
              </div>
              <div className="course-item-title">
                <Typography variant="h6">{course.fields.title}</Typography>
              </div>
            </div>
          )
        })}
      </div>
    </Paper>
  )
}
