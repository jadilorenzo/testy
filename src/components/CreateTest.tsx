import React from 'react'
import { Tab, Tabs, Typography, Card, Container } from '@material-ui/core'
import { Settings, Assignment, Check } from '@material-ui/icons'
import QuestionForm from './QuestionForm'
import OptionsForm from './OptionsForm'
import { CurrentQuestionContextProvider } from '../context/CurrentQuestionContext'
import { OptionsContextProvider } from '../context/OptionsContext'

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

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <OptionsContextProvider>
      {(options: any) => (
        <CurrentQuestionContextProvider>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Options" icon={<Settings />} />
            <Tab label="Question" icon={<Assignment />} />
            <Tab label="Verification" icon={<Check />} />
          </Tabs>
          <Card className="QuestionForm">
            <Container maxWidth="sm">
              <TabPanel value={value} index={1} title="Question">
                <QuestionForm type={options.type} />
              </TabPanel>
              <TabPanel value={value} index={0} title="Options">
                <OptionsForm />
              </TabPanel>
              <TabPanel value={value} index={2} title="Verification"></TabPanel>
            </Container>
          </Card>
        </CurrentQuestionContextProvider>
      )}
    </OptionsContextProvider>
  )
}
