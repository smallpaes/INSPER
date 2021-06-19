import React, { useState, useEffect } from 'react';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import CustomButton from '../custom-button/custom-button.component';
import Skeleton from '../skeleton/Skeleton.component';

import {
  CollectionContainer,
  TitleContainer
} from './collection-overview.styles';

const Collection = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {  
    setIsLoading(true);
    fetch('https://api.pexels.com/v1/search?query=nature&per_page=6', {
      method: 'Get',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setImages(data.photos)
        setIsLoading(false);
      })
  }, [])

  return (
    <CollectionContainer>
      <TitleContainer>Nature</TitleContainer>
      <CustomColumns isGrid>
        {
          (isLoading ? Array.from(new Array(6)) : images).map((image, index) => (
            image ? (
              <ImageCard
                className='column'
                key={image.id}
                imageSrc={image.src.landscape}
                photographer={image.photographer}
                photographerUrl={image.photographer_url}
                placeholderColor={image.avg_color}
              />
            ) : (
              <Skeleton
                key={index}
                type='rect'
                ratio='52.25%'
                animation='wave'
              />
            )
          ))
        }
      </CustomColumns>
      <CustomButton isOutlineButton>
        Find Out More
      </CustomButton>
    </CollectionContainer>
  );
};

export default Collection;