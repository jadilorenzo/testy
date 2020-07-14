import Airtable, { Record } from 'airtable'
import React, { createContext } from 'react'

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
  tests: any[]
  questions: any[]
  loading: boolean
  scores: any[]
  users: any[]
  groups: any[]
  messages: any[]
  testInstances: any[]
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
  tests: [],
  scores: [],
  questions: [],
  messages: [],
  loading: false,
  groups: [],
  users: [{ fields: { username: '', password: '' } }],
  testInstances: []
})

export const AirDBProvider = React.memo((props: any) => {
  const [tests, setTests] = React.useState<any[]>([])
  const [questions, setQuestions] = React.useState<any[]>([])
  const [scores, setScores] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState<any[]>([])
  const [testInstances, setTestInstances] = React.useState<any[]>([])
  const [groups, setGroups] = React.useState<any[]>([])
  const [messages, setMessages] = React.useState<any[]>([])

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
        (user: { fields: { password: string; username: string } }) =>
          user.fields.password === password && user.fields.username === username
      ).length > 0

    const userId = (
      users.filter(
        (user: { fields: { username: string } }) =>
          user.fields.username === username
      )[0] || {
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
        (user: { fields: { username: string } }) =>
          user.fields.username === window.localStorage.getItem('username')
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
        (user: { fields: { username: string } }) =>
          user.fields.username === window.localStorage.getItem('username')
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
      (user: any) =>
        user.fields.username === window.localStorage.getItem('username')
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
    }, 1500)
  }, [])

  return (
    <AirDBContext.Provider
      value={{
        scores,
        messages,
        handleQuestionAnswer,
        updateTestQuestions,
        handleSendMessage,
        createInitialScore,
        handleAddQuestion,
        handleSetScore,
        handleAddTest,
        handleLogin,
        handleLogout,
        tests,
        groups,
        questions,
        loading,
        users,
        testInstances
      }}
    >
      {props.children(users)}
    </AirDBContext.Provider>
  )
})
