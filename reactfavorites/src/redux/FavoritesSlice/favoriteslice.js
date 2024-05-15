import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    favorite: [],
}

export const favoriteslice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        // addToFavorites: (state, action) => {
        //     state.favorite.push(action.payload)
        // },
        deleteToFavorites: (state, action) => {
            let elemIndex = state.favorite.findIndex(el => el.id == action.payload.id)
            if (elemIndex == -1) {
                state.favorite = [...state.favorite, { ...action.payload }]
            } else {
                state.favorite = state.favorite.filter(el => el.id != action.payload.id)
            }
        },
    },
})

export const { setPosts, addToFavorites, deleteToFavorites } = favoriteslice.actions

export default favoriteslice.reducer

