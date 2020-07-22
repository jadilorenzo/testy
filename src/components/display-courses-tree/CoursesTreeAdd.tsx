import React, { useEffect } from 'react'
import Paper from '../Paper'
import { Typography, TextField, Button, useTheme } from '@material-ui/core'
import { TreeView, TreeItem } from '@material-ui/lab'
import { AirDBContext } from '../../context/AirDBContext'
import { DropzoneArea } from 'material-ui-dropzone'
import randomColor from 'randomcolor'

export const AddCourse = (props: any) => {
  const { handleAddCourse } = React.useContext(AirDBContext)
  const [name, setName] = React.useState('')
  const [color, setColor] = React.useState()
  const [files, setFiles] = React.useState<any[]>([])
  const theme = useTheme()

  useEffect(() => {
    setColor(randomColor())
  }, [])

  return (
    <Paper>
      <Typography variant="h5">Add Course</Typography>
      <TextField
        onChange={(e: any) => setName(e.target.value)}
        value={name}
        placeholder="Course Name"
        variant="outlined"
      />
      <div
        style={{
          background: color,
          height: '0.5rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
        }}
      ></div>
      <Button variant="text" onClick={() => setColor(randomColor())}>
        Regenerate Color
      </Button>
      <br />
      {/* <DropzoneArea onChange={files => setFiles(files)} />
      <br />
      <div style={{ color: theme.palette.error.main }}>
        Not operational yet!
      </div> */}
      <Button
        onClick={() =>
          handleAddCourse({
            name,
            color,
            file: files[0]
          }).then(() => props.setRedirect('/courses'))
        }
      >
        Add
      </Button>
    </Paper>
  )
}

export const AddChapter = (props: any) => {
  const { courses, handleAddChapter } = React.useContext(AirDBContext)
  const [name, setName] = React.useState('')
  const [courseId, setCourse] = React.useState<string>('')

  return (
    <Paper>
      <Typography variant="h5">Add Chapter</Typography>
      <Typography variant="h6">Choose Course</Typography>
      <div style={{ marginBottom: '0.5rem' }}>
        <TreeView>
          {courses.map((course: any) => (
            <TreeItem
              label={
                <span
                  style={{ fontWeight: courseId === course.id ? 600 : 400 }}
                >
                  {course.fields.title}
                </span>
              }
              nodeId={course.fields.title}
              onClick={() => setCourse(course.id)}
            />
          ))}
        </TreeView>
      </div>
      <TextField
        onChange={(e: any) => setName(e.target.value)}
        value={name}
        placeholder="Chapter Name"
        variant="outlined"
      />
      <Button
        onClick={() =>
          handleAddChapter({ name, course: courseId }).then(() =>
            props.setRedirect('/courses')
          )
        }
        style={{ marginTop: '0.5rem' }}
      >
        Add
      </Button>
    </Paper>
  )
}

export const AddLesson = (props: any) => {
  const { chapters, handleAddLesson } = React.useContext(AirDBContext)
  const [name, setName] = React.useState('')
  const [chapterId, setCourse] = React.useState<string>('')

  return (
    <Paper>
      <Typography variant="h5">Add Lesson</Typography>
      <Typography variant="h6">Choose Chapter</Typography>
      <div style={{ marginBottom: '0.5rem' }}>
        <TreeView>
          {chapters.map((chapter: any) => (
            <TreeItem
              label={
                <span
                  style={{ fontWeight: chapterId === chapter.id ? 600 : 400 }}
                >
                  {chapter.fields.title}
                </span>
              }
              nodeId={chapter.fields.ID}
              onClick={() => setCourse(chapter.id)}
            />
          ))}
        </TreeView>
      </div>
      <TextField
        onChange={(e: any) => setName(e.target.value)}
        value={name}
        placeholder="Lesson Name"
        variant="outlined"
      />
      <Button
        onClick={() =>
          handleAddLesson({ name, chapter: chapterId }).then(() =>
            props.setRedirect('/courses')
          )
        }
        style={{ marginTop: '0.5rem' }}
      >
        Add
      </Button>
    </Paper>
  )
}

export const AddAssignment = (props: any) => {
  const { lessons, handleAddAssignment } = React.useContext(AirDBContext)
  const [name, setName] = React.useState('')
  const [lessonId, setLessons] = React.useState<string>('')
  const [type, setType] = React.useState('')

  return (
    <Paper>
      <Typography variant="h5">Add Assignment</Typography>
      <Typography variant="h6">Choose Lesson</Typography>
      <div style={{ marginBottom: '0.5rem' }}>
        <TreeView>
          {lessons.map((lesson: any) => (
            <TreeItem
              label={
                <span
                  style={{ fontWeight: lessonId === lesson.id ? 600 : 400 }}
                >
                  {lesson.fields.title}
                </span>
              }
              nodeId={lesson.fields.ID}
              onClick={() => setLessons(lesson.id)}
            />
          ))}
        </TreeView>
      </div>
      <Typography variant="h6">Choose Type</Typography>
      <div style={{ marginBottom: '0.5rem' }}>
        <TreeView>
          <TreeItem
            label={
              <span style={{ fontWeight: type === 'test' ? 600 : 400 }}>
                Test
              </span>
            }
            nodeId="test"
            onClick={() => setType('test')}
          />
          <TreeItem
            label={
              <span style={{ fontWeight: type === 'reading' ? 600 : 400 }}>
                Reading
              </span>
            }
            nodeId="reading"
            onClick={() => setType('reading')}
          />
          <TreeItem
            label={
              <span style={{ fontWeight: type === 'chat' ? 600 : 400 }}>
                Chat
              </span>
            }
            nodeId="chat"
            onClick={() => setType('chat')}
          />
        </TreeView>
      </div>
      <TextField
        onChange={(e: any) => setName(e.target.value)}
        value={name}
        placeholder="Assignment Name"
        variant="outlined"
      />
      <Button
        onClick={() =>
          handleAddAssignment({ name, lesson: lessonId, type }).then(() =>
            props.setRedirect('/courses')
          )
        }
        style={{ marginTop: '0.5rem' }}
      >
        Add
      </Button>
    </Paper>
  )
}
