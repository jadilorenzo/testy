import { createMuiTheme } from '@material-ui/core/styles'

const title = {
  fontWeight: 200,
  fontSize: '2.5em',
  fontFamily: 'Chakra Petch',
  marginBottom: '0.2em'
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1574d2'
    },
    secondary: {
      main: '#81c784' // '#48bc87' //'#0b90a1' // '#ff5d16'
    }
  },
  typography: {
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: title,
    h6: {
      fontWeight: 400,
      fontFamily: 'Chakra Petch',
      marginBottom: '0.2em'
    },
    button: {
      fontWeight: 700,
      fontFamily: "Amiko, local('Amico')",
      color: '#F0F0F0'
    }
  },
  props: {
    MuiAppBar: {
      elevation: 0
    },
    MuiButton: {
      variant: 'outlined',
      color: 'primary',
      disableRipple: true,
      style: {
        border: '1px solid black'
      }
    }
  }
})
// theme.palette.background.default = 'rgb(250, 249, 212)'
theme.palette.background.default = '#1263c0'
theme.palette.background.paper = '#1263c0'

export default theme
