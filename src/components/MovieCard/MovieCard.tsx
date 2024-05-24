import React, { Component } from 'react';
import PropTypes from 'prop-types';


interface MovieCardProps { }
interface MovieCardState { }

class MovieCard extends Component<MovieCardProps, MovieCardState> {

    constructor(props: MovieCardProps) {
        super(props)
        this.state = {}
    }

    componentDidMount(): void { }

    componentWillUnmount(): void { }

    render() {
        return (
            <div className="card">
                <img width={"187px"} height={"222px"} src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' />
                <div className='info_'>
                    <div className=''>
                        <span style={{ color: 'white' }}>sdfsdgf</span>
                    </div>
                </div>
            </div>
            // <>
            //     <div className="card">
            //         <img width={"187px"} height={"222px"} src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' />
            //         <div className='info'>
            //             <div className='' style={{fontSize:15,fontWeight:"bolder"}}>
            //                 9.5
            //             </div>
            //         </div>
            //         <div className='-' style={{ color: 'white', display: 'flex', flexDirection: "column", fontSize: 12, textAlign: 'center', fontWeight: "bolder", padding: 10 }}>
            //             Ape vs. Mecha Ape
            //         </div>
            //     </div>
            // </>
        );
    }
}


// movie title => "Godzilla Minus One"
// image, => /fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg
// genre, 
// cast, 
// director, 
// description


// {
//     "adult": false,
//     "backdrop_path": "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
//     "genre_ids": [878, 27, 28],
//     "id": 940721,
//     "original_language": "ja",
//     "original_title": "ゴジラ-1.0",
//     "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
//     "popularity": 1109.091,
//     "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
//     "release_date": "2023-11-03",
//     "title": "Godzilla Minus One",
//     "video": false,
//     "vote_average": 7.682,
//     "vote_count": 1133
//   },

export default MovieCard;