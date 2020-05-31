import Airtable from 'airtable'
import React, { createContext } from 'react'

export const AirDBContext = createContext<{
  postAirDB: Function
  getAirDB: Function
}>({ postAirDB: () => {}, getAirDB: () => {} })

export const AirDBProvider = (props: any) => {
  const base = new Airtable({ apiKey: 'key29JR5FoxxlCqor' }).base(
    'appeQvvPNhaPvYi0s'
  )

  const Table = props.table

  const getAirDB = async () => {
    return await base(Table)
      .select({ view: 'Grid view' })
      .all()
      .then(r => {
        console.log(r)
        return r
      })
  }

  const postAirDB = async (newRow: any) => {
    return base(Table).create([
      {
        fields: {
          ...newRow
        }
      }
    ])
  }

  return (
    <AirDBContext.Provider value={{ postAirDB, getAirDB }}>
      {props.children}
    </AirDBContext.Provider>
  )
}
