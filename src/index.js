import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import theme from './utils/theme';

const target = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
  , target);
registerServiceWorker();
