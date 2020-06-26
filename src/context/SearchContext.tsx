import React, { createContext } from 'react'

const initialValue = {
  tags: [],
  search: ''
}

const state = [initialValue, () => {}]

export const SearchContext = createContext<any>(state)

export const SearchProvider = (props: any) => {
  const [search, setSearch] = React.useState(initialValue)

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </SearchContext.Provider>
  )
}
