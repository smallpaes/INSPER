import React, { useState, useEffect } from 'react';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';

import {
  CollectionContainer,
  TitleContainer
} from './collection.styles';

const Collection = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?page=1&per_page=6', {
      method: 'Get',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data.photos)
      })
  }, [])

  return (
    <CollectionContainer>
      <TitleContainer>Nature</TitleContainer>
      <CustomColumns isGrid>
        {
          images.map(image => (
            <ImageCard
              className='column'
              key={image.id}
              imageSrc={image.src.landscape}
              photographer={image.photographer}
              photographerUrl={image.photographer_url}
              placeholderColor={image.avg_color}
            />
          ))
        }
      </CustomColumns>
    </CollectionContainer>
  );
};

export default Collection;