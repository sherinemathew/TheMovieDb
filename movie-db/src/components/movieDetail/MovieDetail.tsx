import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './MovieDetail.css';
import { MovieDetailResponse } from '../../models/MovieDetail';
import { getMovieDetail } from '../../services/MovieAPI';
import { Loader } from '../loader/Loader';

export function MovieDetail() {

    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [movieDetail, setMovieDetail] = useState<MovieDetailResponse>();

    useEffect(() => {
        setIsLoading(true);
        getMovieDetail(+id)
            .then((response => {
                setIsLoading(false);
                setMovieDetail(response)
            }))
    }, [id])
    const getTimeInHoursAndMinutes = (minutes?: number): string => {
        if (!minutes) {
            return '';
        }
        const hours = Math.round(minutes / 60);
        const minutesPart = Math.round(minutes % 60);
        return `${hours}h ${minutesPart} min`;
    }
    return (
        <div className="main">
            {isLoading &&
                <Loader />
            }
            <Link to={`/`}><div className="back-link">&lt;</div></Link>
            {movieDetail ?
                (<div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path})` }}>
                </div>) : null
            }
            <div className="content">
                <div className="card-image">
                    {movieDetail ? <img src={`https://image.tmdb.org/t/p/w185${movieDetail?.poster_path}`} alt="{movieDetail?.original_title}"></img> : null}
                </div>
                <div className="heading-text">
                    <h2>
                        {movieDetail?.original_title}
                    </h2>
                    <div className="info">
                        {movieDetail ? new Date(movieDetail?.release_date).toLocaleString('default', { year: 'numeric' }) : null}
                        - {`${movieDetail ? (movieDetail?.vote_average * 10) : 0}% User Score`} <br />
                        {getTimeInHoursAndMinutes(movieDetail?.runtime)}
                    </div>
                </div>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2><br />
                {movieDetail?.overview}
            </div>
        </div>
    )
}
