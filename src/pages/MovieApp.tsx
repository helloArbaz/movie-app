import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithDeviceInfo from '../hoc/WithDeviceInfo';
import LazyLoadImage from '../components/LazyLoadImage';
import MovieCard from '../components/MovieCard/MovieCard';

import "./MovieApp.css"

class MovieApp extends Component {
    render() {
        return (
            <>
                <div className="grid">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v, i) => <MovieCard />)
                    }
                </div>
            </>
        )
    }
}

export default WithDeviceInfo(MovieApp);