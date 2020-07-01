import React from 'react'
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core'
import Paper from './Paper'
import TestDisplay from './add-test/TestDisplay'
import { AirDBContext } from '../context/AirDBContext'
import { SearchContext } from '../context/SearchContext'
import filterTests from '../methods/filterTests'
import Button from './Button'

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
        <Typography variant="h5">Search Tests</Typography>
        <Button
          variant="text"
          color="primary"
          style={{ float: 'right', position: 'relative', top: '-2.5rem' }}
          onClick={() => props.setRedirect('/scores')}
        >
          Scores
        </Button>
        <div style={{ marginBottom: '0.2rem' }}>
          <TextField
            label="Search"
            onChange={handleSearchChange}
            value={search.search}
            variant="outlined"
            style={{
              width: '40%',
              margin: 'auto',
              borderRadius: '0.4em'
            }}
          />
        </div>
        <div>
          <FormControl
            variant="outlined"
            style={{ width: '50%', marginTop: -15, marginBottom: 10 }}
          >
            <InputLabel style={{ position: 'relative', top: 25 }}>
              Tags
            </InputLabel>
            <Select
              multiple
              label="Tags"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={search.tags}
              onChange={handleTagChange}
            >
              {tests
                .flatMap((test: any) => (test.fields.tags || '').split(', '))
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
