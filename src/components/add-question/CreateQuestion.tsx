import React from 'react'
import { Tabs, Tab, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { primary } from '../../colors'
import QuestionForm from './QuestionForm'
import OptionsForm from './OptionsForm'
import Verification from './Verification'
import { CurrentQuestionContextProvider } from '../../context/CurrentQuestionContext'
import { OptionsContextProvider } from '../../context/OptionsContext'
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

export default (props: { id: number; setRedirect: Function }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(event)
    setValue(newValue)
  }

  return (
    <OptionsContextProvider>
      {(options: any) => (
        <CurrentQuestionContextProvider>
          <StyledTabs value={value} onChange={handleChange} centered>
            <StyledTab label="1. Options" />
            <StyledTab label="2. Question" />
            <StyledTab label="3. Verification" />
          </StyledTabs>
          <Paper>
            <TabPanel value={value} index={0} title="Options">
              <OptionsForm />
            </TabPanel>
            <TabPanel value={value} index={1} title="Question">
              <QuestionForm type={options.type} />
            </TabPanel>
            <TabPanel value={value} index={2} title="Verification">
              <Verification id={props.id} setRedirect={props.setRedirect} />
            </TabPanel>
          </Paper>
        </CurrentQuestionContextProvider>
      )}
    </OptionsContextProvider>
  )
}
