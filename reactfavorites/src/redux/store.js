import { configureStore } from '@reduxjs/toolkit'
import favoriteslice from './FavoritesSlice/favoriteslice'
export const store = configureStore({
    reducer: {
        posts: favoriteslice,
    },
})