import React from 'react'
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
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
        <Grid item xs={12} sm={6} style={{ marginBottom: '0.2rem' }}>
          <TextField
            label="Search"
            onChange={handleSearchChange}
            value={search.search}
            variant="outlined"
            style={{
              margin: 'auto',
              borderRadius: '0.4em'
            }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormControl
            variant="outlined"
            style={{ marginTop: -15, marginBottom: 10 }}
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
                .filter((tag: string) => tag !== '')
                .map((tag: string) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <div style={{ maxHeight: '30rem', overflow: 'scroll' }}>
          {tests
            .filter((test: any) =>
              filterTests(
                { ...test.fields, tags: test.fields.tags || '' },
                search
              )
            )
            .map((row: any) => (
              <div
                key={row.fields.ID}
                style={{ width: '100%' }}
                onClick={() => props.setRedirect(`/test/${row.fields.ID}`)}
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
