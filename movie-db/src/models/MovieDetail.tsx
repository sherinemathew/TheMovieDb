export interface MovieDetailResponse {
    backdrop_path: string;
    overview: string;
    poster_path: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    runtime: number;
}

export interface MovieDetailImage {
    backdrops: MovieDetailImagePath[];
}

export interface MovieDetailImagePath {
    file_path: string;
}
