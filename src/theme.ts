import { createMuiTheme } from '@material-ui/core/styles'

const title = {
  fontWeight: 200,
  fontFamily: 'Chakra Petch',
  marginBottom: '0.2em'
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1574d2'
    },
    secondary: {
      main: '#81c784'
    }
  },
  typography: {
    h1: title,
    h2: title,
    h3: title,
    h5: title,
    h4: {
      fontWeight: 200,
      fontFamily: 'Chakra Petch'
    },
    h6: {
      fontWeight: 400,
      ...title
    },
    button: {
      fontFamily: 'Roboto',
      color: '#E0E0E0'
    }
  },
  props: {
    MuiAppBar: {
      elevation: 0
    },
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
      disableElevation: true
    },
    MuiButtonGroup: {
      variant: 'contained',
      color: 'secondary',
      disableElevation: true
    },
    MuiPaper: {
      elevation: 0,
      style: { padding: '1em', background: '#EEE' }
    },
    MuiCard: {
      elevation: 0
    }
  }
})

if (theme.palette.type === 'light') theme.palette.background.default = '#EEE'

export default theme
