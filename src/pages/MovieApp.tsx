import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



import WithDeviceInfo from '../hoc/WithDeviceInfo';
import MovieCard from '../components/MovieCard/MovieCard';
import { RootState, AppDispatch } from '../store';

import "./MovieApp.css"
import { api_getMoviesList } from '../services/getMoviesList';


interface MovieAppProps {
    value: number;
    increment: () => void;
    decrement: () => void;
    api_getMoviesList: () => void;
    incrementByAmount: (amount: number) => void;
}

interface MovieAppState { }


class MovieApp extends Component<MovieAppProps, MovieAppState> {

    handleIncrement = async () => {
        let res = await this.props.api_getMoviesList()
        console.log(res,'res')
    };

    handleDecrement = () => {
        this.props.decrement();
    };

    handleIncrementByAmount = () => {
        this.props.incrementByAmount(5);
    };


    render() {
        console.log(this.props)
        return (
            <>

                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleIncrementByAmount}>Increment by 5</button>

                <div className="grid">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v, i) => <MovieCard />)
                    }
                </div>
            </>
        )
    }
}

// export default WithDeviceInfo(MovieApp);


const mapStateToProps = (state: RootState) => ({
    value: state.counter,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    api_getMoviesList: (reqData?: any) => dispatch(api_getMoviesList())
});

export default connect(mapStateToProps, mapDispatchToProps)(WithDeviceInfo(MovieApp));