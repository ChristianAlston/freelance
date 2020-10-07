import React from 'react';
import './App.css';
import Service from './Components/Service/Service';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from './Components/Root/Root';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path='/' component={Root} exact />
        <Route path='/Service' component={Service} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
