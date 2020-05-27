import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'key29JR5FoxxlCqor' }).base(
  'appeQvvPNhaPvYi0s'
)

const Table = 'Table 1'

const getDB = async () => {
  return await base(Table)
    .select({ view: 'Grid view' })
    .all()
    .then(r => {
      console.log(r)
      return r
    })
}

export const postDB = async (id: string, question: any) => {
  console.log({ id })
  const row: any = await base(Table).find(id)

  return base(Table).update([
    {
      id: 'recg8fTWLLOM0S5pR',
      fields: {
        Questions:
          (row.fields['Questions'] || '').split(',') +
          JSON.stringify(question) +
          ','
      }
    }
  ])
}

export default getDB
