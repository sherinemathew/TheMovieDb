export interface PopularMovieModel {
    id: number;
    poster_path: string;
    overview: string;
    release_date: string;
    title: string;
    vote_average: number;
}

export interface PopularMoviesResponse {
    results: PopularMovieModel[];
}
