import React from 'react';

import { 
  CardContainer,
  DetailContainer,
  ImageContainer,
  InfoContainer,
  AvatarContainer,
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
        <AvatarContainer />
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

export default ImageCard;