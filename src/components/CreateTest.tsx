import React from 'react'
import { Tab, Tabs, Typography } from '@material-ui/core'
import TestForm from './TestForm'
import TestVerification from './TestVerification'
import { TestProvider } from '../context/TestContext'
import Paper from './Paper'

function TabPanel(props: any) {
  const { title, children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography variant={'h5'} className={'QuestionTitle'}>
            {title}
          </Typography>
          {children}
        </div>
      )}
    </div>
  )
}

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(event)
    setValue(newValue)
  }

  return (
    <TestProvider>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="1. Test" />
        <Tab label="2. Verification" />
      </Tabs>
      <div>
        <Paper className="QuestionForm">
          <TabPanel value={value} index={0} title="Test">
            <TestForm />
          </TabPanel>
          <TabPanel value={value} index={1} title="Verification">
            <TestVerification />
          </TabPanel>
        </Paper>
      </div>
    </TestProvider>
  )
}
