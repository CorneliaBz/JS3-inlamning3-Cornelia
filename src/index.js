import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style/index.css';
import Layout from './components/layout/layout';
import NotFound from './components/pages/notFound/notFound';
import LoginPage from './components/pages/login/userforms';

import MoviesPage from './components/pages/movies/movies';
import AddMovies from './components/movies/addmovies';
import MovieItem from './components/pages/movies/movieitem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='addMovie' element={<AddMovies />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>

        <Route path="/movies" element={<Layout />}>
          <Route index element={<MoviesPage />}></Route>
          <Route path=":name" element={<MovieItem />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);