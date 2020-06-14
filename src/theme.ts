import { createMuiTheme } from '@material-ui/core/styles'

const title = {
  fontWeight: 400,
  fontSize: '2.5em',
  fontFamily: 'Amatic SC',
  marginBottom: '0.2em'
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: 'rgb(252, 172, 42)' //'#0b90a1' // '#ff5d16'
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
      fontFamily: 'Amatic SC',
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
      style: {
        border: '1px solid black'
      }
    }
  }
})

theme.palette.background.default = 'rgb(250, 249, 212)'
theme.palette.background.paper = 'rgb(250, 230, 168)'
// theme.palette.background.default = '#00558c'

export default theme
