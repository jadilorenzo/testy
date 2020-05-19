import React from 'react'
import { Tab, Tabs, Typography, Card } from '@material-ui/core'
import QuestionForm from './QuestionForm'

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
          <Typography variant="h6">{title}</Typography>
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
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Question" />
        <Tab label="Options" />
        <Tab label="Verification" />
      </Tabs>
      <Card className="QuestionForm">
        <TabPanel value={value} index={0} title="Question">
          <QuestionForm type="multiple-choice" />
        </TabPanel>
        <TabPanel value={value} index={1} title="Options"></TabPanel>
        <TabPanel value={value} index={2} title="Verification"></TabPanel>
      </Card>
    </div>
  )
}
