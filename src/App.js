import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Collection from './pages/collection/collection.component';

import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/collection/:query" component={Collection} />
      </Switch>
    </div>
  );
}

export default App;
