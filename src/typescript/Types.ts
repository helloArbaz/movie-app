export type DeviceType = 'sm' | 'md' | 'lg' | 'xl';


/**
    MovieCards
 */
export type genre_ids = []
export type MovieCard = {
    adult:boolean;
    backdrop_path:string;
    genre_ids:genre_ids,
    id:string;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:string;
    poster_path:string;
    release_date:string;
    title:string;
    video:string;
    vote_average:string;
    vote_count:string
}


/*
    Filter Menu List
*/
export type FilterMenuList = {}

