import MovieCard from "../components/MovieCard/MovieCard";
import { FilterMenuList } from "./Types";

export interface InterfaceMovieCard extends MovieCard { }

export interface InterfaceFilterMenuList extends FilterMenuList { }

export interface InterfaceMovieAppData {
    2012: [MovieCard]
}

