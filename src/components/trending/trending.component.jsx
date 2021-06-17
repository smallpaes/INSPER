import React, { useState, useEffect, useCallback } from 'react';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import Observer from '../observer/observer-component';

import {
  TrendingContainer,
  TitleContainer
} from './trending.styles';

const Trending = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0);

  const onIntersecting = useCallback(() => {
    setPage(page => page + 1);
  }, []);

  useEffect(() => {
    if (page === 0) return;
    fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=15`, {
      method: 'Get',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.photos]);
      });
  }, [page]);

  return (
    <TrendingContainer>
      <TitleContainer>Trending</TitleContainer>
      <CustomColumns isMasonry>
        {
          images.map(image => (
            <ImageCard
              className='column'
              key={image.id}
              imageSrc={image.src.large2x}
              photographer={image.photographer}
              photographerUrl={image.photographer_url}
              placeholderColor={image.avg_color}
            />
          ))
        }
      </CustomColumns>
      <Observer
        rootMargin='400px'
        onIntersecting={onIntersecting}
      >Loading</Observer>
    </TrendingContainer>
  );
};

export default Trending;