import React, { useState, useEffect } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../config';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    const [{ state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state);
 
    return (
    <React.Fragment>
        <HeroImage/>
        <SearchBar/>
        <Grid/>
        <MovieThumb/>
        <LoadMoreBtn/>
        <Spinner/>
    </React.Fragment>
  );
}

export default Home;