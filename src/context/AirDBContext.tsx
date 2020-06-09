import Airtable from 'airtable'
import React, { createContext } from 'react'

export const AirDBContext = createContext<{
  postAirDB: Function
  getAirDB: Function
  tests: any[]
  questions: any[]
}>({ postAirDB: () => {}, getAirDB: () => {}, tests: [], questions: [] })

export const AirDBProvider = (props: any) => {
  const [tests, setTests] = React.useState([])
  const [questions, setQuestions] = React.useState([])

  const base = new Airtable({ apiKey: 'key29JR5FoxxlCqor' }).base(
    'appeQvvPNhaPvYi0s'
  )

  const getAirDB = async (table: string) => {
    return await base(table)
      .select({ view: 'Grid view' })
      .all()
      .then(r => {
        console.log(r)
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

  React.useEffect(() => {
    getAirDB('Testy - Tests').then((r: any) => setTests(r))
    getAirDB('Testy - Questions').then((r: any) => setQuestions(r))
  }, [])

  return (
    <AirDBContext.Provider value={{ postAirDB, getAirDB, tests, questions }}>
      {props.children}
    </AirDBContext.Provider>
  )
}
