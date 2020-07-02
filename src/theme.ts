import { createMuiTheme } from '@material-ui/core/styles'
import { primary, secondary } from './colors'
const font = "'Ubuntu'"
const title = {
  fontWeight: 400,
  fontFamily: font,
  marginBottom: '0.2em'
}

let theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  },
  typography: {
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: {
      ...title,
      fontFamily: 'Ubuntu',
      fontWeight: 400
    },
    h6: {
      ...title,
      fontFamily: 'Ubuntu',
      fontWeight: 400,
      '& > hover': {
        color: primary
      }
    },
    button: {
      fontFamily: 'Roboto',
      color: '#E0E0E0'
    }
  },
  props: {
    MuiFormGroup: {
      className: 'form-group'
    },
    MuiAppBar: {
      elevation: 0
    },
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
      className: 'btn',
      disableElevation: true
    },
    MuiButtonGroup: {
      className: 'btn-group',
      variant: 'contained',
      color: 'secondary',
      disableElevation: true
    },
    MuiPaper: {
      elevation: 0,
      style: { padding: '0.75rem', background: '#EEE' }
    },
    MuiCard: {
      elevation: 0
    },
    MuiIconButton: {
      className: 'icon-btn',
      disableTouchRipple: true,
      disableRipple: true
    },
    MuiSelect: {
      className: 'select'
    },
    MuiFormControl: {
      className: 'form-control'
    },
    MuiTextField: {
      className: 'text-field'
    }
  }
})

if (theme.palette.type === 'light') theme.palette.background.default = '#EEE'

export default theme
