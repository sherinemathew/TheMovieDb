import React, { useEffect, useState } from 'react';

import './App.css';
import logo from '../images/theMovieDbLogo.svg';
import { PopularMovieModel } from '../../models/PopularMovies';
import { getPopularMovies } from '../../services/MovieAPI';
import { MovieList } from '../movieList/MovieList';

import { Row } from 'antd';
import 'antd/dist/antd.css';

function App() {

  const [data, setData] = useState<PopularMovieModel[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData([]);
    if (!searchQuery || searchQuery === '') {
      getPopularMovies()
        .then(resp => {
          setData(resp.results);
          setLoading(false);
        }, (message) => {
          setError(message);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <div className="app">
      <div className="layout">
        <header className="header">
          <div className="logo-container">t
            <a href="/" className="logo">
              <img className="logo-image" src={logo} alt="Movie Db" />
            </a>
          </div>
        </header>
        <div className="popular-movies">
          <h1 className="heading">Popular Movies</h1>
        </div>
        <div className="content">
          <Row gutter={16} justify="center">
            {data !== null && data.length > 0 && data.map((result, index) => (
              <MovieList key={result.id}
                {...result}
              />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
