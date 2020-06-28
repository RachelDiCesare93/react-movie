import React from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, moviedId, clickable }) => (
<StyledMovieThumb>
    {clickable ? (
    <Link to={`/${moviedId}`}>
     <img className="clickable" src={image} alt="moviethumb" />
     </Link>
    ) : (
     <img src={image} alt="moviethumb" />
    )}
</StyledMovieThumb>
); 


export default MovieThumb;