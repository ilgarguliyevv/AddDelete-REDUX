import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, deleteToFavorites } from '../redux/FavoritesSlice/favoriteslice';
const Favorites = () => {
    const data = useSelector((state) => state.posts.posts)
    console.log(data);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Favorites</h1>
            {
                data?.map((elem, index) => {
                    return (
                        <li key={index}>{elem.title}
                            <button onClick={() => dispatch(deleteToFavorites(elem))}>Add Favorites</button></li>
                    )
                })
            }
        </div>
    )
}

export default Favorites
