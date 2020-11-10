import React from 'react';

import  './MovieList.css';
import { PopularMovieModel } from '../../models/PopularMovies';

import { Card, Col } from 'antd';
const { Meta } = Card;

export const MovieList = (movieInfo: PopularMovieModel) => {
    return (
        <Col style={{ margin: '20px 0' }} className="gutter-row" key={movieInfo.id}>
            <div key={movieInfo.id} className="gutter-box">
                <Card key={movieInfo.id}
                    style={{ width: 200 }}
                    className="movie-card"
                    cover={
                        <div>
                            <span className={movieInfo.vote_average > 7 ? 'good-rating' : (movieInfo.vote_average > 4 ? 'medium-rating' : 'low-rating')}>{`${movieInfo.vote_average * 10}%`}</span>
                            <img
                                alt=""
                                src={`https://image.tmdb.org/t/p/w185${movieInfo.poster_path}`}
                            />
                        </div>
                    }
                >
                    <Meta title={movieInfo.title} className="title"
                    />
                    <Meta
                        title={new Date(movieInfo.release_date).toLocaleString('default', { month: 'long', year: 'numeric' })}
                    />
                </Card>
            </div>
        </Col>
    )
}