import { ActionReducerMapBuilder, createSlice, isAction, PayloadAction } from '@reduxjs/toolkit';
import { InterfaceMovieAppData } from '../typescript/Interface';
import { api_getMoviesList } from '../services/getMoviesList';

interface MovieAppState {
    value: number,
    data:[]
}

const initialState: MovieAppState = {
    value: 0,
    data:[]
};

const movieAppSlice = createSlice({
    name: 'MovieApp',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<any>): void => {
        builder.addCase(api_getMoviesList.pending, (state: any, action: any) => {
            state.loader = true
        });
        builder.addCase(api_getMoviesList.fulfilled, (state: MovieAppState, action: any) => {
            state.data = action.payload
            return state
        });
    }
});

export const { } = movieAppSlice.actions;
export default movieAppSlice.reducer;