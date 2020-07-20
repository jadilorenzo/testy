import React from 'react'
import {
  SchoolRounded,
  InsertDriveFileRounded,
  AssignmentRounded,
  AssessmentRounded,
  BarChartRounded
} from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import Paper from './Paper'

export default (props: any) => {
  return (
    <Paper>
      <div className="center">
        <div className="avatar-group">
          <div className="avatar" style={{ width: '4rem', height: '4rem' }}>
            <SchoolRounded fontSize="large" />
          </div>
          <Typography variant="h6">Add Course</Typography>
        </div>
        <div className="avatar-group">
          <div className="avatar" style={{ width: '4rem', height: '4rem' }}>
            <InsertDriveFileRounded fontSize="large" />
          </div>
          <Typography variant="h6">Add Chapter</Typography>
        </div>
        <div className="avatar-group">
          <div className="avatar" style={{ width: '4rem', height: '4rem' }}>
            <AssignmentRounded fontSize="large" />
          </div>
          <Typography variant="h6">Add Lesson</Typography>
        </div>
        <div className="avatar-group">
          <div className="avatar" style={{ width: '4rem', height: '4rem' }}>
            <AssessmentRounded fontSize="large" />
          </div>
          <Typography variant="h6">Add Assignment</Typography>
        </div>
        <div className="avatar-group">
          <div className="avatar" style={{ width: '4rem', height: '4rem' }}>
            <BarChartRounded fontSize="large" />
          </div>
          <Typography variant="h6">Add Test</Typography>
        </div>
      </div>
    </Paper>
  )
}
