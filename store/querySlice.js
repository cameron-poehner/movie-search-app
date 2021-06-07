import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    search: '',
}

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        userQuery: (state, action) => {
            state.value = action.payload
        },
    }, 
})


export const { userQuery } = querySlice.actions
export const selectQuery = state => state.search.value
export default querySlice.reducer





