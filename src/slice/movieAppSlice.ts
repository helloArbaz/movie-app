import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InterfaceMovieAppData } from '../typescript/Interface';

interface MovieAppState {
    value: number
}

const initialState: MovieAppState = {
    value: 0
};

const movieAppSlice = createSlice({
    name: 'MovieApp',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = movieAppSlice.actions;
export default movieAppSlice.reducer;