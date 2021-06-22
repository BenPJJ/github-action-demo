import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/home';


function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
      </ul>
      <Route path="/" exact component={Home} />
    </Router>
  )
}

export default AppRouter;