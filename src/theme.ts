import { createMuiTheme } from '@material-ui/core/styles'
import { primary, secondary } from './colors'
const font = 'Lato'
const title = {
  fontWeight: 200,
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
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'capitalize'
      }
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto'
        }
      }
    }
  },
  typography: {
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: {
      ...title,
      fontFamily: font,
      fontWeight: 200
    },
    h6: {
      ...title,
      fontFamily: font,
      fontWeight: 400,
      '& > hover': {
        color: primary
      }
    },
    button: {
      fontFamily: 'Roboto Condensed',
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
      style: { borderRadius: '0.5rem' },
      className: 'btn',
      disableElevation: true,
      disableTouchRipple: true
    },
    MuiButtonGroup: {
      className: 'btn-group',
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
