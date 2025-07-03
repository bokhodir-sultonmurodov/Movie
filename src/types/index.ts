export interface IMovie{
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number,
    genre_ids: string,
    release_date:string,
    overview:string,
    vote_count:number,
    original_language:string,
    genres:any,
}

export interface IGenre {
    id: number,
    name: string
}