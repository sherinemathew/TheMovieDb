import React, { useEffect, useState } from 'react';

import './App.css';
import logo from '../images/theMovieDbLogo.svg';
import { PopularMovieModel } from '../../models/MovieList';
import { getPopularMovies, searchMovie } from '../../services/MovieAPI';
import { MovieList } from '../movieList/MovieList';
import { SearchBox } from '../searchBox/SearchBox';
import { Loader } from '../loader/Loader';

import { Row, Alert } from 'antd';
import 'antd/dist/antd.css';

function App() {

  const [data, setData] = useState<PopularMovieModel[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchResultsText, setSearchResultsText] = useState('Popular Movies');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData([]);
    if (!searchQuery || searchQuery === '') {
      setSearchResultsText('Popular Movies');
      getPopularMovies()
        .then(resp => {
          setData(resp.results);
          setLoading(false);
        }, (message) => {
          setError(message);
          setLoading(false);
        });
    } else {
      setSearchResultsText('Search Results');
      searchMovie(searchQuery)
        .then(resp => {
          setData(resp.results);
          setLoading(false);
        }, (message) => {
          setError(message);
          setLoading(false);
        })
    }
  }, [searchQuery]);

  return (
    <div className="app">
      <div className="layout">
        <header className="header">
          <div className="logo-container">
            <a href="/" className="logo">
              <img className="logo-image" src={logo} alt="Movie Db" />
            </a>
          </div>
        </header>
        <div className="content">
          <div className="search-box">
            <SearchBox searchHandler={setSearchQuery} /> <br />
            {loading &&
              <Loader />
            }
            {error !== null &&
              <div style={{ margin: '20px 0' }}>
                <Alert message={error} type="error" />
              </div>
            }
            <div className="popular-movies">
          <h1 className="heading">{searchResultsText}</h1>
            </div>
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
    </div>
  );
}

export default App;
