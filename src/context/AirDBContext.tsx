import Airtable from 'airtable'
import React, { createContext } from 'react'

export const AirDBContext = createContext<{
  handleLogin: Function
  handleAddTest: Function
  handleAddQuestion: Function
  updateTestQuestions: Function
  handleQuestionAnswer: Function
  createInitialScore: Function
  handleLogout: Function
  handleSetScore: Function
  tests: any[]
  questions: any[]
  loading: boolean
  scores: any[]
  users: any[]
  testInstances: any[]
}>({
  handleLogin: () => {},
  handleAddQuestion: () => {},
  handleAddTest: () => {},
  updateTestQuestions: () => {},
  handleQuestionAnswer: () => {},
  createInitialScore: () => {},
  handleLogout: () => {},
  handleSetScore: () => {},
  tests: [],
  scores: [],
  questions: [],
  loading: false,
  users: [],
  testInstances: []
})

export const AirDBProvider = React.memo((props: any) => {
  const [tests, setTests] = React.useState<any[]>([])
  const [questions, setQuestions] = React.useState<any[]>([])
  const [scores, setScores] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState<any[]>([])
  const [testInstances, setTestInstances] = React.useState<any[]>([])

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
      props.setRedirect('/')
      window.localStorage.setItem('username', username)
      updateAirDB('Testy - Users', userId, {
        active: 'true'
      })
    }
  }

  const handleAddQuestion = ({ options, question }: any) => {
    const userid = (
      users.filter(
        (user: { fields: { username: string } }) =>
          user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: '' } }
    ).fields.ID

    return postAirDB('Testy - Questions', {
      ...question,
      userid,
      options: question.options
        .sort()
        .map((x: string) => x.trim())
        .join(', '),
      type: options.type,
      autocheck: JSON.stringify(options.autocheck)
    })
  }

  const handleAddTest = async ({ questionIDs, test }: any) => {
    const userid = (
      users.filter(
        (user: { fields: { username: string } }) =>
          user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: '' } }
    ).fields.ID

    await postAirDB('Testy - Tests', {
      ...test,
      userid,
      tags: test.tags.join(', '),
      questions: questionIDs.join(', ')
    }).then(() => (window.location.pathname = '/'))
  }

  const updateTestQuestions = ({ test, questionIDs }: any) => {
    updateAirDB('Testy - Tests', test.id, {
      questions: questionIDs.join(', ')
    }).then(() => {
      props.setRedirect('/')
    })
  }

  const handleLogout = () => {
    const userId = users.filter(
      (user: any) =>
        user.fields.username === window.localStorage.getItem('username')
    )[0].id

    updateAirDB('Testy - Users', userId, {
      active: false
    }).then(() => {
      props.setRedirect('/')
      window.localStorage.removeItem('username')
    })
  }

  const handleSetScore = ({ scoreID, score }: any) => {
    const scorid = (
      scores.filter(score => score.fields.ID === scoreID)[0] || {
        id: ''
      }
    ).id

    return updateAirDB('Testy - Test Scores', scorid, { score })
  }

  const createInitialScore = ({ id, setScoreID }: any) => {
    const userid = (
      users.filter(
        user => user.fields.username === window.localStorage.getItem('username')
      )[0] || { fields: { ID: 0 } }
    ).fields.ID
    postAirDB('Testy - Test Scores', {
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

    postAirDB('Testy - Test Instances', {
      answer: value,
      'correct answer': question.fields.answer,
      correct: JSON.stringify(question.fields.answer === value),
      scoreid: scoreID,
      question: question.fields.question
    })
  }

  React.useEffect(() => {
    setInterval(() => {
      getAirDB('Testy - Tests').then((r: any) => setTests(r))
      getAirDB('Testy - Users')
        .then((r: any) => setUsers(r))
        .then(() => setLoading(false))
      getAirDB('Testy - Questions').then((r: any) => setQuestions(r))
      getAirDB('Testy - Test Scores').then((r: any) => setScores(r))
      getAirDB('Testy - Test Instances').then((r: any) => setTestInstances(r))
    }, 1500)
  }, [])

  return (
    <AirDBContext.Provider
      value={{
        scores,
        handleQuestionAnswer,
        updateTestQuestions,
        createInitialScore,
        handleAddQuestion,
        handleSetScore,
        handleAddTest,
        handleLogin,
        handleLogout,
        tests,
        questions,
        loading,
        users,
        testInstances
      }}
    >
      {props.children}
    </AirDBContext.Provider>
  )
})
