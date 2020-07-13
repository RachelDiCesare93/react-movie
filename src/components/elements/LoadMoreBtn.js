import React from 'react';

import Proptypes from'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

const LoadMoreBtn = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}> 
     {text}
    </StyledLoadMoreBtn>

);

LoadMoreBtn.propTypes = {
    text: Proptypes.string,
    callback: Proptypes.func
}


export default LoadMoreBtn;