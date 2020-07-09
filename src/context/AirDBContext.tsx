import Airtable from 'airtable'
import React, { createContext } from 'react'

export const AirDBContext = createContext<{
  postAirDB: Function
  getAirDB: Function
  updateAirDB: Function
  tests: any[]
  questions: any[]
  loading: boolean
  scores: any[]
  users: any[]
  testInstances: any[]
}>({
  postAirDB: () => {},
  updateAirDB: () => {},
  getAirDB: () => {},
  tests: [],
  scores: [],
  questions: [],
  loading: false,
  users: [],
  testInstances: []
})

export const AirDBProvider = React.memo((props: any) => {
  const [tests, setTests] = React.useState([])
  const [questions, setQuestions] = React.useState([])
  const [scores, setScores] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState([])
  const [testInstances, setTestInstances] = React.useState([])

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
        postAirDB,
        getAirDB,
        updateAirDB,
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
