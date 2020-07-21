import React from 'react'
import {
  Collapse,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider
} from '@material-ui/core'
import {
  SchoolRounded,
  InsertDriveFileRounded,
  AssignmentRounded,
  AssessmentRounded,
  BarChartRounded,
  HomeRounded,
  FaceRounded,
  SearchRounded,
  TrendingUpRounded
} from '@material-ui/icons'

export default (props: any) => {
  const theme = useTheme()

  return (
    <div
      style={{
        borderBottom: props.in
          ? `0.25rem solid ${theme.palette.primary.main}`
          : ''
      }}
    >
      <Collapse in={props.in}>
        <div
          style={{
            background: theme.palette.background.paper
          }}
        >
          <div style={{ width: '90%', margin: 'auto' }}>
            <List component="nav">
              <ListSubheader>Main</ListSubheader>
              <Divider />
              <ListItem button onClick={() => props.setRedirect('/')}>
                <ListItemIcon>
                  <HomeRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Home</div>}
                />
              </ListItem>
              <ListItem button onClick={() => props.setRedirect('/chat')}>
                <ListItemIcon>
                  <FaceRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Chat</div>}
                />
              </ListItem>
              <ListItem button onClick={() => props.setRedirect('/chat')}>
                <ListItemIcon>
                  <TrendingUpRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Scores</div>}
                />
              </ListItem>
              <ListItem button onClick={() => props.setRedirect('/search')}>
                <ListItemIcon>
                  <SearchRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Search</div>}
                />
              </ListItem>
              <ListSubheader>Add</ListSubheader>
              <Divider />
              <ListItem button onClick={() => props.setRedirect('/add/course')}>
                <ListItemIcon>
                  <SchoolRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Add Course</div>}
                />
              </ListItem>
              <ListItem
                button
                onClick={() => props.setRedirect('/add/chapter')}
              >
                <ListItemIcon>
                  <InsertDriveFileRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Add Chapter</div>}
                />
              </ListItem>
              <ListItem button onClick={() => props.setRedirect('/add/lesson')}>
                <ListItemIcon>
                  <AssignmentRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Add Lesson</div>}
                />
              </ListItem>
              <ListItem
                button
                onClick={() => props.setRedirect('/add/assignment')}
              >
                <ListItemIcon>
                  <AssessmentRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Add Assignment</div>}
                />
              </ListItem>
              <ListItem button onClick={() => props.setRedirect('/add/test')}>
                <ListItemIcon>
                  <BarChartRounded fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<div style={{ color: '#000' }}>Add Test</div>}
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Collapse>
    </div>
  )
}
