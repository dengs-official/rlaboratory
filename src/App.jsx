import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import RLayout from './pages/layout/RLayout';
import Login from './pages/login/Login';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={RLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
