import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
