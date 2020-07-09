import filterTests from './filterTests'

test('filters tests by search', () => {
  const searchString = 'XXX AAA BBB CCC'
  const search = { search: 'x', tags: [] }
  const tests: any[] = [{ title: searchString, tags: '', questions: '' }]
  expect(
    tests
      .filter((test: any) => filterTests(test, search))
      .map(test => test.title)
  ).toContain(searchString)
})

test('filters tests by tags', () => {
  const searchString = 'XXX AAA BBB CCC'
  const search = { search: '', tags: ['x'] }
  const tests: any[] = [{ title: searchString, tags: 'x, y', questions: '' }]
  expect(
    tests
      .filter((test: any) => filterTests(test, search))
      .map(test => test.title)
  ).toContain(searchString)
})

test('filters tests by tags and search', () => {
  const searchString = 'XXX AAA BBB CCC'
  const search = { search: 'aaa', tags: ['x'] }
  const tests: any[] = [{ title: searchString, tags: 'x, y', questions: '' }]
  expect(
    tests
      .filter((test: any) => filterTests(test, search))
      .map(test => test.title)
  ).toContain(searchString)
})

test('will not always include results', () => {
  const searchString = 'XXX AAA BBB CCC'
  const search = { search: 'f', tags: [] }
  const tests: any[] = [{ title: searchString, tags: 'x, y', questions: '' }]
  expect(
    tests
      .filter((test: any) => filterTests(test, search))
      .map(test => test.title)
  ).not.toContain(searchString)
})
