import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/app/App';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MovieDetail } from './components/movieDetail/MovieDetail';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route exactpath="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
