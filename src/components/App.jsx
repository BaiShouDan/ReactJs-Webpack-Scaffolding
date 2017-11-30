import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <h1>PIPPO</h1>
		<MyAwesomeReactComponent />
  </MuiThemeProvider>
);

export default App;