import Airtable from 'airtable'
import React, { createContext } from 'react'
import {
  Record,
  test,
  question,
  score,
  user,
  testInstance,
  group,
  message,
  course,
  chapter,
  lesson,
  assignment
} from '../types'

export const AirDBContext = createContext<{
  handleLogin: Function
  handleAddTest: Function
  handleAddQuestion: Function
  updateTestQuestions: Function
  handleQuestionAnswer: Function
  createInitialScore: Function
  handleSendMessage: Function
  handleLogout: Function
  handleSetScore: Function
  handleAddCourse: Function
  handleAddChapter: Function
  handleAddLesson: Function
  handleAddAssignment: Function

  tests: any[]
  questions: any[]
  loading: boolean
  scores: any[]
  users: any[]
  groups: any[]
  messages: any[]
  testInstances: any[]

  courses: any[]
  chapters: any[]
  lessons: any[]
  assignments: any[]
}>({
  handleLogin: () => {},
  handleAddQuestion: () => {},
  handleAddTest: () => {},
  updateTestQuestions: () => {},
  handleQuestionAnswer: () => {},
  handleSendMessage: () => {},
  createInitialScore: () => {},
  handleLogout: () => {},
  handleSetScore: () => {},
  handleAddCourse: () => {},
  handleAddChapter: () => {},
  handleAddLesson: () => {},
  handleAddAssignment: () => {},
  tests: [],
  scores: [],
  questions: [],
  messages: [],
  loading: false,
  groups: [],
  users: [{ fields: { username: '', password: '' } }],
  testInstances: [],

  courses: [],
  chapters: [],
  lessons: [],
  assignments: []
})

export const AirDBProvider = React.memo((props: any) => {
  const [tests, setTests] = React.useState<Record<test>[]>([])
  const [questions, setQuestions] = React.useState<Record<question>[]>([])
  const [scores, setScores] = React.useState<Record<score>[]>([])
  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState<Record<user>[]>([])
  const [testInstances, setTestInstances] = React.useState<
    Record<testInstance>[]
  >([])
  const [groups, setGroups] = React.useState<Record<group>[]>([])
  const [messages, setMessages] = React.useState<Record<message>[]>([])

  const [courses, setCourses] = React.useState<Record<course>[]>([])
  const [chapters, setChapters] = React.useState<Record<chapter>[]>([])
  const [lessons, setLessons] = React.useState<Record<lesson>[]>([])
  const [assignments, setAssignments] = React.useState<Record<assignment>[]>([])

  const base = new Airtable({ apiKey: 'key29JR5FoxxlCqor' }).base(
    'appeQvvPNhaPvYi0s'
  )

  const getAirDB = async (table: string) => {
    return await base(table)
      .select({ view: 'Grid view' })
      .all()
      .then(r => {
        return r
      })
  }

  const postAirDB = async (table: string, newRow: any) => {
    return base(table).create(
      [
        {
          fields: {
            ...newRow
          }
        }
      ],
      { typecast: true }
    )
  }

  const updateAirDB = (table: string, id: string, fields: any) => {
    return base(table).update(
      [
        {
          id,
          fields: {
            ...fields
          }
        }
      ],
      { typecast: true }
    )
  }

  const handleLogin = ({ password, username, setToggled }: any) => {
    const isMatching =
      users.filter(
        user =>
          user.fields.password === password && user.fields.username === username
      ).length > 0

    const userId = (
      users.filter(user => user.fields.username === username)[0] || {
        id: ''
      }
    ).id

    if (isMatching) {
      setToggled(false)
      window.localStorage.setItem('username', username)
      return updateAirDB('Users', userId, {
        active: true
      })
    } else {
      throw new Error('INCORRECT PASSWORD')
    }
  }

  const handleAddQuestion = async ({ options, question }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: '' } }
    ).fields.ID

    return postAirDB('Questions', {
      ...question,
      userid,
      options: question.options
        .sort()
        .map((x: string) => x.trim())
        .join(', '),
      type: options.type,
      autocheck: JSON.stringify(options.autocheck)
    }).then((r: any) => (r[0] || { fields: { ID: 0 } }).fields.ID)
  }

  const handleAddTest = async ({ test }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: '' } }
    ).fields.ID

    await postAirDB('Tests', {
      ...test,
      userid,
      tags: test.tags.join(', ')
    }).then((r: any) => {
      const id = (r[0] || { fields: { ID: 0 } }).fields.ID
      console.log(id)
      props.setRedirect(`/add/question/to/${id}`)
    })
  }

  const updateTestQuestions = async ({ test, questionIDs }: any) => {
    return updateAirDB('Tests', test.id, {
      questions: questionIDs.filter((s: string) => s !== '').join(', ')
    }).then((r: any) => {
      const id = r[0].fields.ID
      props.setRedirect(`/test/${id}`)
    })
  }

  const handleLogout = () => {
    const userId = users.filter(
      user => user.fields.username === window.localStorage.getItem('username')
    )[0].id

    return updateAirDB('Users', userId, { active: false })
  }

  const handleSetScore = ({ scoreID, score }: any) => {
    const scorid = (
      scores.filter(score => score.fields.ID === scoreID)[0] || {
        id: ''
      }
    ).id

    return updateAirDB('Test Scores', scorid, { score })
  }

  const createInitialScore = ({ id, setScoreID }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: 0 } }
    ).fields.ID

    postAirDB('Test Scores', {
      userid,
      test: id
    }).then((r: any) => {
      setScoreID(r[r.length - 1].fields.ID)
    })
  }

  const handleQuestionAnswer = ({
    handleSubmit,
    value,
    question,
    index,
    scoreID
  }: any) => {
    handleSubmit(value, question, index)

    postAirDB('Test Instances', {
      answer: value,
      'correct answer': question.fields.answer,
      correct: JSON.stringify(question.fields.answer === value),
      scoreid: scoreID,
      question: question.fields.question
    })
  }

  const handleSendMessage = ({ groupid, text }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: 0 } }
    ).fields.ID

    return postAirDB('Messages', {
      groupid: JSON.stringify(groupid),
      userid: JSON.stringify(userid),
      text
    })
  }

  const handleAddCourse = ({ name }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { id: '' }
    ).id

    return postAirDB('Courses', {
      title: name,
      userid: userid
    })
  }

  const handleAddChapter = async ({ name, course }: any) => {
    const lessonIds: string[] = (
      courses.filter(thisCourse => thisCourse.id === course)[0] || {
        fields: { chapters: '' }
      }
    ).fields.chapters.split(', ')

    return postAirDB('Chapters', {
      title: name
    }).then((r: any) => {
      const newId = r[0].fields.ID
      return updateAirDB('Courses', course, {
        chapters: [...lessonIds.filter(id => id !== ''), newId].join(', ')
      })
    })
  }

  const handleAddLesson = async ({ name, chapter }: any) => {
    const chapterIds: string[] = (
      chapters.filter(thisChapter => thisChapter.id === chapter)[0] || {
        fields: { lessons: '' }
      }
    ).fields.lessons.split(', ')

    return postAirDB('Lessons', {
      title: name
    }).then((r: any) => {
      const newId = r[0].fields.ID
      return updateAirDB('Chapters', chapter, {
        lessons: [...chapterIds.filter(id => id !== ''), newId].join(', ')
      })
    })
  }

  const handleAddAssignment = async ({ name, lesson, type }: any) => {
    const lessonIds: string = (
      lessons.filter(thisLesson => thisLesson.id === lesson)[0] || {
        fields: { assignments: '' }
      }
    ).fields.assignments

    return postAirDB('Assignments', {
      title: name
    }).then((r: any) => {
      const newId = r[0].fields.ID
      return updateAirDB('Lessons', lesson, {
        assignments:
          lessonIds !== '' ? [...lessonIds.split(', '), newId].join(', ') : '',
        type
      })
    })
  }

  React.useEffect(() => {
    setInterval(() => {
      getAirDB('Tests').then((r: any) => setTests(r))
      getAirDB('Users')
        .then((r: any) => setUsers(r))
        .then(() => setLoading(false))
      getAirDB('Questions').then((r: any) => setQuestions(r))
      getAirDB('Test Scores').then((r: any) => setScores(r))
      getAirDB('Test Instances').then((r: any) => setTestInstances(r))
      getAirDB('Groups').then((r: any) => setGroups(r))
      getAirDB('Messages').then((r: any) => setMessages(r))

      getAirDB('Courses').then((r: any) => setCourses(r))
      getAirDB('Chapters').then((r: any) => setChapters(r))
      getAirDB('Lessons').then((r: any) => setLessons(r))
      getAirDB('Assignments').then((r: any) => setAssignments(r))
    }, 5500)
  }, [])

  return (
    <AirDBContext.Provider
      value={{
        handleQuestionAnswer,
        updateTestQuestions,
        handleSendMessage,
        createInitialScore,
        handleAddQuestion,
        handleSetScore,
        handleAddTest,
        handleAddCourse,
        handleAddChapter,
        handleAddLesson,
        handleAddAssignment,
        handleLogin,
        handleLogout,

        scores,
        messages,
        tests,
        groups,
        questions,
        loading,
        users,
        testInstances,

        courses,
        chapters,
        lessons,
        assignments
      }}
    >
      {props.children}
    </AirDBContext.Provider>
  )
})
