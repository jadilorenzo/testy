import { createMuiTheme } from '@material-ui/core/styles'

export const themeParams = {
  palette: {
    primary: {
      main: '#1565c0'
    },
    secondary: {
      main: '#ffa000'
    }
  }
}

const theme = createMuiTheme({
  palette: themeParams.palette
})

export default theme
