import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon/icon.component';

import { 
  CardContainer,
  DetailContainer,
  ImageContainer,
  InfoContainer,
  DescriptionContainer,
  ActionsContainer,
  HeartContainer,
  DownloadContainer
} from './image-card.styles';

const ImageCard = ({ 
  imageSrc,
  photographer,
  photographerUrl,
  isFixedHeight,
  height,
  placeholderColor,
  ...otherProps
 }) => (
  <CardContainer
    fixedHeight={isFixedHeight}
    placeholderColor={placeholderColor}
    {...otherProps}
  >
    <ImageContainer
      src={imageSrc}
      alt={`An image taken by ${photographer}`}
      fixedHeight={isFixedHeight}
      height={height}
    />
    <DetailContainer>
      <InfoContainer 
        to={{ pathname: photographerUrl }} 
        target="_blank"
      >
        <Icon 
          name='bear' 
          size={33}
        />
        <DescriptionContainer>
          Photo By {photographer} on Pexels
        </DescriptionContainer>
      </InfoContainer>
      <ActionsContainer>
        <DownloadContainer />
        <HeartContainer />
      </ActionsContainer>
    </DetailContainer>
  </CardContainer>
);

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  photographer: PropTypes.string.isRequired,
  photographerUrl: PropTypes.string.isRequired,
  isFixedHeight: PropTypes.bool,
  height: function(props, propName, componentName) {
    if (props['isFixedHeight']) {
      if (props[propName] === undefined) return new Error(`Lack of prop ${propName} in ${componentName} when isFixedHeight prop is set.`);
      if (typeof(props[propName]) !== 'number') return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
    }
  },
  placeholderColor: PropTypes.string
};

ImageCard.defaultProps = {
  placeholderColor: 'transparent'
};

export default ImageCard;