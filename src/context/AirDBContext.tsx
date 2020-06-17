import Airtable from 'airtable'
import React, { createContext } from 'react'

export const AirDBContext = createContext<{
  postAirDB: Function
  getAirDB: Function
  updateAirDB: Function
  tests: any[]
  questions: any[]
  loading: boolean
}>({
  postAirDB: () => {},
  updateAirDB: () => {},
  getAirDB: () => {},
  tests: [],
  questions: [],
  loading: false
})

export const AirDBProvider = React.memo((props: any) => {
  const [tests, setTests] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [questions, setQuestions] = React.useState([])

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
    return base(table).create([
      {
        fields: {
          ...newRow
        }
      }
    ])
  }

  const updateAirDB = (table: string, id: string, fields: any) => {
    return base(table).update([
      {
        id,
        fields: {
          ...fields
        }
      }
    ])
  }

  React.useEffect(() => {
    setInterval(() => {
      getAirDB('Testy - Tests').then((r: any) => setTests(r))
      getAirDB('Testy - Questions')
        .then((r: any) => {
          setQuestions(r)
          return r
        })
        .then(r => {
          setLoading(false)
          return r
        })
    }, 3000)
  }, [])

  return (
    <AirDBContext.Provider
      value={{
        postAirDB,
        getAirDB,
        updateAirDB,
        tests,
        questions,
        loading
      }}
    >
      {props.children}
    </AirDBContext.Provider>
  )
})
