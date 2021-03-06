import React from 'react';

import Proptypes from'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ header, children }) => (
 <StyledGrid>
  <h1>{header}</h1>
  <StyledGridContent>{children}</StyledGridContent>
     
</StyledGrid>
);

Grid.propTypes = {
  header: Proptypes.string
 }


export default Grid;