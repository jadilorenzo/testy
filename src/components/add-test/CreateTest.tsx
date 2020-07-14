import React from 'react'
import { Tab, Tabs, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { primary } from '../../colors'
import TestForm from './TestForm'
import TestVerification from './TestVerification'
import { TestProvider } from '../../context/TestContext'
import Paper from '../Paper'

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

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '5rem',
      width: '100%',
      background: primary
    }
  }
})((props: any) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
))

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      color: primary
    }
  }
}))((props: any) => <Tab disableRipple {...props} />)

export default (props: any) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <TestProvider>
      <StyledTabs value={value} onChange={handleChange} centered>
        <StyledTab label="1. Test" />
        <StyledTab label="2. Verification" />
      </StyledTabs>
      <div>
        <Paper className="QuestionForm">
          <TabPanel value={value} index={0} title="Test">
            <TestForm />
          </TabPanel>
          <TabPanel value={value} index={1} title="Verification">
            <TestVerification setRedirect={props.setRedirect} />
          </TabPanel>
        </Paper>
      </div>
    </TestProvider>
  )
}
