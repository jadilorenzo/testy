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

  return (
    <AirDBContext.Provider value={{ postAirDB, getAirDB }}>
      {props.children}
    </AirDBContext.Provider>
  )
}
