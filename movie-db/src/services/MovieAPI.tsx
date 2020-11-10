import { http } from "./HttpUtility";
import { PopularMoviesResponse } from "../models/MovieList";
import { MovieDetailResponse, MovieDetailImage } from "../models/MovieDetail";

const movieUrlPrefix = 'https://api.themoviedb.org/3';
const apiKey = '6ed12e064b90ae1290fa326ce9e790ff';

export async function getPopularMovies(): Promise<PopularMoviesResponse> {
    const popularMoviesUrl = `${movieUrlPrefix}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await http<PopularMoviesResponse>(popularMoviesUrl);
    return response;
}

export async function searchMovie(query: string): Promise<PopularMoviesResponse> {
    const popularMoviesUrl = `${movieUrlPrefix}/search/movie?api_key=${apiKey}&query=${query}&page=1`;
    const response = await http<PopularMoviesResponse>(popularMoviesUrl);
    return response;
}

export async function getMovieDetail(movieId: number): Promise<MovieDetailResponse> {
    const movieDetailUrl = `${movieUrlPrefix}/movie/${movieId}?api_key=${apiKey}`;
    const response = await http<MovieDetailResponse>(movieDetailUrl);
    return response;
}

export async function getMovieImages(movieId: number): Promise<MovieDetailImage> {
    const movieImageUrl = `${movieUrlPrefix}/movie/${movieId}/images?api_key=${apiKey}`;
    const response = await http<MovieDetailImage>(movieImageUrl);
    return response;
}
