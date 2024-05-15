import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, deleteToFavorites } from '../redux/FavoritesSlice/favoriteslice'

const AddFavorites = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.posts.favorite)
    console.log(data)
    return (
        <div>
            <h1>Add Favorites</h1>
            {
                data?.map((elem, index) => {
                    return (
                        <li key={elem.id}>{elem.title}
                            <button onClick={() => dispatch(deleteToFavorites(elem))}>Delete</button></li>
                    )
                })
            }
        </div>
    )
}

export default AddFavorites;
