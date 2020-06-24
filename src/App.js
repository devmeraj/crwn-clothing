import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

function HatsPage() {
  return <h1>Hats Page</h1>
}
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;