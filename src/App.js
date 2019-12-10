import React from 'react';
import Home from './pages/home'
import Classfiy from './pages/classfiy'
import Search from './pages/search'
import Brand from './pages/brand'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/classfiy' component={Classfiy} />
        <Route path='/search' component={Search} />
        <Route path='/brand' component={Brand} />
      </Switch>
    </Router>
  );
}

export default App;
