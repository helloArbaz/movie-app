import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



import WithDeviceInfo from '../hoc/WithDeviceInfo';
import MovieCard from '../components/MovieCard/MovieCard';
import { RootState, AppDispatch } from '../store';
import { increment, decrement, incrementByAmount } from '../slice/movieAppSlice';

import "./MovieApp.css"


interface MovieAppProps {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (amount: number) => void;
}

interface MovieAppState {}


class MovieApp extends Component<MovieAppProps, MovieAppState> {

    handleIncrement = () => {
        this.props.increment();
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
    value: state.counter.value,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithDeviceInfo(MovieApp));