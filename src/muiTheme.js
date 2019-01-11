/**
 * MUI Theme overrides
 */

import {createMuiTheme} from '@material-ui/core/styles';
// import {FlatButton, IconButton} from 'material-ui';

export const theme = {
  checkbox: { checkedColor: '#ff694c', boxColor: '#9D9D9D' },
  datePicker: { selectColor: '#FF884B' },
  dialog: { titleFontSize: '20px' },
  flatButton: { primaryTextColor: '#ff694c', disabledTextColor: '#c1c1c1', secondaryTextColor: '#11cd69' },
  fontFamily: 'Raleway, sans-serif',
  overlay: { backgroundColor: 'rgba(44, 43, 49, 0.3)' },
  palette: { primary1Color: '#fc971b', textColor: '#2c2b31' },
  spacing: { desktopGutter: 34 },
  textField: { focusColor: '#FF884B', hintColor: '#9E9E9E' }
};

//global configs for MUI components
// //disableTouchRipple
// FlatButton.defaultProps.disableTouchRipple = true;
// IconButton.defaultProps.disableTouchRipple = true;
// MenuItem.defaultProps.disableTouchRipple = true;
// //disableFocusRipple
// FlatButton.defaultProps.disableFocusRipple = true;
// IconButton.defaultProps.disableFocusRipple = true;
// MenuItem.defaultProps.disableFocusRipple = true;
// Checkbox.defaultProps.disableFocusRipple = true;
// Toggle.defaultProps.disableFocusRipple = true;
// //hover color
// FlatButton.defaultProps.hoverColor = 'transparent';
export default createMuiTheme(theme);
