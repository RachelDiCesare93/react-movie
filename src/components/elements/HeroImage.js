import React from 'react';
import {StyledHeroImage} from '../styles/StyledHeroImage';

// const StyledHeroImage = styled.div`
//   background: ${props =>
//   `linear-gradient(
//       to botton,rgba(0, 0 ,0, 0)
//       39%, rgba(0, 0, 0, 0)
//       41%, rgba(0, 0 , 0, 0)
//       100%
//   ),
//    url('${props.image}'), #1c1c1c`
//    background-size: 100%, cover;
//    background-position: center, center;
//    width: 100%;
//    height: 600px;
//    position: relative;
//    animation: animateHeroimage 1s;
 
// `;

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


export default HeroImage;