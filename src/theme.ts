import { createMuiTheme } from '@material-ui/core/styles'

const title = {
  fontWeight: 400,
  fontFamily: 'Electrolize'
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#006bcd'
    },
    secondary: {
      main: '#0b90a1' // '#ff5d16'
    }
  },
  typography: {
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: title,
    h6: title,
    button: {
      fontWeight: 700,
      fontFamily: 'Amiko',
      color: '#F0F0F0'
    }
  },
  overrides: {
    MuiChip: {
      root: { background: '#F0F0F0', color: '#FFF' }
    }
  }
})

theme.palette.background.default = '#0a3d89'
theme.palette.background.paper = '#1559a8'
// theme.palette.background.default = '#00558c'

export default theme
