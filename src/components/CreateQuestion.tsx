import React from 'react'
import { Tab, Tabs, Typography } from '@material-ui/core'
import QuestionForm from './QuestionForm'
import OptionsForm from './OptionsForm'
import Verification from './Verification'
import { CurrentQuestionContextProvider } from '../context/CurrentQuestionContext'
import { OptionsContextProvider } from '../context/OptionsContext'
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
          <Typography
            variant={title !== 'Options' ? 'h5' : 'h4'}
            className={'QuestionTitle'}
          >
            {title}
          </Typography>
          {children}
        </div>
      )}
    </div>
  )
}

export default (props: any) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(event)
    setValue(newValue)
  }

  return (
    <OptionsContextProvider>
      {(options: any) => (
        <CurrentQuestionContextProvider>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="1. Options" />
            <Tab label="2. Question" />
            <Tab label="3. Verification" />
          </Tabs>
          <div>
            <Paper className="QuestionForm">
              <TabPanel value={value} index={0} title="Options">
                <OptionsForm />
              </TabPanel>
              <TabPanel value={value} index={1} title="Question">
                <QuestionForm type={options.type} />
              </TabPanel>
              <TabPanel value={value} index={2} title="Verification">
                <Verification />
              </TabPanel>
            </Paper>
          </div>
        </CurrentQuestionContextProvider>
      )}
    </OptionsContextProvider>
  )
}
