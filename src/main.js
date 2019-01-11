import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';

import './assets/stylesheets/main.less';
import theme from './muiTheme';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider theme={theme}>
        {require('./routes').routes}
      </MuiThemeProvider>
    </div>
  </Provider>, document.getElementById('root')
);