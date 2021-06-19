import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectTrendImages, selectIsFetching } from '../../redux/trend/trend.selectors';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import Observer from '../observer/observer.component';
import Spinner from '../spinner/spinner.component';

import { fetchTrendStart } from '../../redux/trend/trend.actions';

import {
  TrendingContainer,
  TitleContainer
} from './trending.styles';

const Trending = () => {
  const [page, setPage] = useState(0);
  const images = useSelector(selectTrendImages);
  const isFetching = useSelector(selectIsFetching);
  const dispatch = useDispatch();

  // Observer relies on reference equality to prevent unnecessary renders
  const onIntersecting = useCallback(() => {
    setPage(page => page + 1);
  }, []);

  useEffect(() => {
    if (page === 0) return;
    dispatch(fetchTrendStart(page));
  }, [page, dispatch]);

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
      >
        { isFetching && <Spinner /> }
      </Observer>
    </TrendingContainer>
  );
};

export default Trending;