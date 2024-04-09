import { createSlice } from '@reduxjs/toolkit';

const initialMovieState = { movies: [] };

const movieSlice = createSlice({
    name: "Movies",
    initialState: initialMovieState,
    reducers: {
        addMovies(state, action) {
            state.movies = action.payload;
        }
    }
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;