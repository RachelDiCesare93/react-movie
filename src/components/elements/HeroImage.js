import React from 'react';
import {StyledHeroImage} from '../styles/StyledHeroImage';

import Proptypes from'prop-types';

const HeroImage = ({image, title, text}) => (
<StyledHeroImage image={image}>
    <div className="heroimage-content">
    <div className="heroimage-text">
    <h1>{title}</h1>
    <p>{text}</p>
    </div>
    </div>
</StyledHeroImage>
);

HeroImage.propTypes = {
    image: Proptypes.string,
    title: Proptypes.string,
    text: Proptypes.string
   }


export default HeroImage;