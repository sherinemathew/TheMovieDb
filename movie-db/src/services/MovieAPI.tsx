import { PopularMoviesResponse } from "../models/PopularMovies";
import { http } from "./HttpUtility";

const movieUrlPrefix = 'https://api.themoviedb.org/3';
const apiKey = '6ed12e064b90ae1290fa326ce9e790ff';

export async function getPopularMovies(): Promise<PopularMoviesResponse> {
    const popularMoviesUrl = `${movieUrlPrefix}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await http<PopularMoviesResponse>(popularMoviesUrl);
    return response;
}
