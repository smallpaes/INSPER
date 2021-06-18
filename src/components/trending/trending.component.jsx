import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectTrendImages } from '../../redux/trend/trend.selectors';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import Observer from '../observer/observer-component';

import {
  TrendingContainer,
  TitleContainer
} from './trending.styles';

const Trending = () => {
  const [page, setPage] = useState(0);
  const images = useSelector(selectTrendImages);

  // Observer relies on reference equality to prevent unnecessary renders
  const onIntersecting = useCallback(() => {
    setPage(page => page + 1);
  }, []);

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