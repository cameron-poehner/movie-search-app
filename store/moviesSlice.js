import { createSlice, createSelector } from '@reduxjs/toolkit'

let initialState = {
    results: [],
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        moviesResults: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { moviesResults } = moviesSlice.actions




export default moviesSlice.reducer