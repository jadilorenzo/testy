import React from 'react'
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  useTheme,
  FormControl,
  InputLabel
} from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './add-test/TestDisplay'
import { AirDBContext } from '../context/AirDBContext'
import { SearchContext } from '../context/SearchContext'
import filterTests from '../methods/filterTests'

export default (props: any) => {
  const { tests } = React.useContext(AirDBContext)
  const [search, setSearch] = React.useContext(SearchContext)

  const handleSearchChange = (e: any) => {
    e.persist()
    setSearch((prev: any) => ({ ...prev, search: e.target.value }))
  }

  const handleTagChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.persist()
    setSearch((prev: any) => {
      let tags: string[] = event.target.value as string[]
      return { ...prev, tags }
    })
  }

  return (
    <>
      <br />
      <Paper>
        <Typography variant="h5">Recent Tests</Typography>
        <div style={{ marginBottom: '0.2rem' }}>
          <TextField
            label="Search"
            onChange={handleSearchChange}
            value={search.search}
            style={{
              width: '40%',
              margin: 'auto',
              borderRadius: '0.4em',
              marginBottom: 5
            }}
          />
          <br />
          <FormControl style={{ width: '50%', marginBottom: '0.2rem' }}>
            <InputLabel>Tags</InputLabel>
            <Select multiple value={search.tags} onChange={handleTagChange}>
              {tests
                .flatMap((test: any) => test.fields.tags.split(', '))
                .sort()
                .map((tag: any) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ maxHeight: '30rem', overflow: 'scroll' }}>
          {tests
            .filter((test: any) => filterTests(test.fields, search))
            .map((row: any) => (
              <div
                key={row.fields.ID}
                style={{ width: '100%' }}
                onClick={() => props.setRedirect(`/test/${row.id}`)}
              >
                <TestDisplay
                  test={{
                    ...row.fields,
                    tags: row.fields.tags ? row.fields.tags.split(', ') : [],
                    questions: row.fields.questions
                      ? row.fields.questions.split(', ')
                      : []
                  }}
                />
              </div>
            ))}
        </div>
      </Paper>
    </>
  )
}
