import React, { useState } from 'react';
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL
} from '../config';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
    const [
      { 
        state: { movies, currentPage,  totalPages, heroImage}, 
        loading, 
        error
      }, 
      fetchMovies
    ] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = search => {
      const endpoint = search ? SEARCH_BASE_URL + search: POPULAR_BASE_URL;
      
      setSearchTerm(search);
      fetchMovies(endpoint);
    }

    const loadMoreMovies = () => {
      const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
      const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

      const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

      fetchMovies(endpoint)
    }
    
    if (error) return <div>Oops! Something went wrong...</div>
    if(!heroImage[0]) return <Spinner/>
 
    return (
    <React.Fragment>
      { !searchTerm && (
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
        />
      )}
        <SearchBar callback={searchMovies}/>
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}> 
         {movies.map(movie => (
           <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path 
                ?  IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
            
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
         ))}
        </Grid>
        {loading && <Spinner/>} 
        {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
      )}
      </React.Fragment>
  );
}

export default Home;