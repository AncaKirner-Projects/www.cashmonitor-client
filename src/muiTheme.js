/**
 * MUI Theme overrides
 */

import {createMuiTheme} from '@material-ui/core/styles';

export const theme = {
  palette: { primary: { main:'#53a3a3' }, secondary: {main: '#428bca'} },
  spacing: { desktopGutter: 34 },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  }
};

export default createMuiTheme(theme);
