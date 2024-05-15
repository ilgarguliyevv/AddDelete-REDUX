import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favorites from './Favorites';
import { useEffect } from 'react';
import { setPosts } from './redux/FavoritesSlice/favoriteslice';
import { getAllData } from './services';
import { endPoints } from './services/api';
import { useDispatch } from 'react-redux';
import AddFavorites from './AddFavorites';




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllData(endPoints.posts).then((res) => {
      dispatch(setPosts(res));
    });
  }, []);


  return (
    <>
      <Favorites />
      <AddFavorites />
    </>

  )
}

export default App
