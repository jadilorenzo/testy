export default (
  test: { title: string; tags: string; userid: string },
  search: any
) => {
  const includesSearch = test.title
    .toLowerCase()
    .includes(search.search.toLowerCase())
  const includesAllTags =
    search.tags.length !== 0
      ? test.tags.split(', ').filter(tag => search.tags.includes(tag))
          .length === search.tags.length
      : true

  return includesSearch && includesAllTags
}
