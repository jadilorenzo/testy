import React from 'react'
import { AirDBContext } from '../../context/AirDBContext'
import { TreeView, TreeItem as TI } from '@material-ui/lab'
import { Typography, Button, ButtonGroup } from '@material-ui/core'
import { ArrowRight, ArrowDropDown, PhotoFilter } from '@material-ui/icons'
import Paper from '../Paper'

export default (props: any) => {
  const { courses, chapters, lessons, assignments, users } = React.useContext(
    AirDBContext
  )

  const userid = (
    users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0] || { fields: { ID: 0 } }
  ).fields.ID

  const TreeItem = (props: any) => (
    <div style={{ margin: '0.5rem' }}>
      <TI
        {...props}
        classes={{
          label: 'tree-item-label',
          root: 'tree-item-root'
        }}
      />
    </div>
  )

  return (
    <>
      <Paper>
        <Typography variant="h5">Courses</Typography>
        <div>
          <TreeView
            defaultCollapseIcon={<ArrowDropDown />}
            defaultExpandIcon={<ArrowRight />}
          >
            {courses
              .filter((course: any) => course.fields.userid === userid)
              .map((course: any, index) => (
                <TreeItem
                  key={index}
                  nodeId={course.fields.title}
                  label={course.fields.title}
                >
                  {chapters
                    .filter((chapter: any) =>
                      (course.fields.chapters || '')
                        .split(', ')
                        .includes(JSON.stringify(chapter.fields.ID))
                    )
                    .map((chapter: any, index) => (
                      <TreeItem
                        key={index}
                        nodeId={chapter.fields.title}
                        label={chapter.fields.title}
                      >
                        {lessons
                          .filter((lesson: any) =>
                            (chapter.fields.lessons || '')
                              .split(', ')
                              .includes(JSON.stringify(lesson.fields.ID))
                          )
                          .map((lesson: any, index) => (
                            <TreeItem
                              key={index}
                              nodeId={lesson.fields.title}
                              label={lesson.fields.title}
                            >
                              {assignments
                                .filter((assignment: any) =>
                                  (lesson.fields.assignments || '')
                                    .split(', ')
                                    .includes(
                                      JSON.stringify(assignment.fields.ID)
                                    )
                                )
                                .map((assignment: any, index) => (
                                  <TreeItem
                                    key={index}
                                    nodeId={assignment.fields.title}
                                    label={assignment.fields.title}
                                  >
                                    {assignment.fields.type === 'test' && (
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() =>
                                          props.setRedirect(
                                            `/test/${assignment.fields.testid}`
                                          )
                                        }
                                      >
                                        Take Test
                                      </Button>
                                    )}
                                    {assignment.fields.type === 'chat' && (
                                      <Button
                                        variant="outlined"
                                        color="primary"
                                      >
                                        Chat
                                      </Button>
                                    )}
                                    {assignment.fields.type === 'reading' && (
                                      <Button
                                        variant="outlined"
                                        color="primary"
                                      >
                                        Reading Assignment
                                      </Button>
                                    )}
                                  </TreeItem>
                                ))}
                            </TreeItem>
                          ))}
                      </TreeItem>
                    ))}
                </TreeItem>
              ))}
          </TreeView>
        </div>
        <ButtonGroup>
          <Button
            onClick={() => props.setRedirect('/add/course')}
            style={{ borderRadius: '0.5rem 0 0 0.5rem' }}
            color="secondary"
            variant="outlined"
          >
            Add Course
          </Button>
          <Button
            onClick={() => props.setRedirect('/add/chapter')}
            style={{}}
            color="secondary"
            variant="outlined"
          >
            Add Chapter
          </Button>
          <Button
            onClick={() => props.setRedirect('/add/lessons')}
            style={{}}
            color="secondary"
            variant="outlined"
          >
            Add Lesson
          </Button>
          <Button
            onClick={() => props.setRedirect('/add/assignment')}
            style={{ borderRadius: '0 0.5rem 0.5rem 0' }}
            color="secondary"
            variant="outlined"
          >
            Add Assignment
          </Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}
