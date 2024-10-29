export interface Movies {
    title: string,
    director: string,
    episode_id: number,
};

export interface MoviesResponse {
    results: Movies[];
}