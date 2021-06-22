import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';

import CustomColumns from '../../components/custom-columns/custom-columns.components';
import ImageCard from '../../components/image-card/image-card.component';
import Observer from '../../components/observer/observer.component';
import Spinner from '../../components/spinner/spinner.component';

import useFetch from '../../effects/use-fetch.effect';

import {
  CollectionContainer,
  TitleContainer
} from './collection.styles';

const Collection = () => {
  const { query } = useParams();
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [queryConfig, setQueryConfig] = useState({
    query,
    per_page: 15
  });
  const queryStringRef = useRef();

  const { 
    data, 
    isLoading
  } = useFetch(process.env.REACT_APP_PEXELS_SEARCH_URL, page, queryStringRef.current);

  const onIntersecting = useCallback(() => {
    setPage(page => page + 1);
  }, []);

  useEffect(() => {
    setPage(0);
    setImages([]);
    setQueryConfig(queryConfig => ({ ...queryConfig, query }));
  }, [query]);

  useEffect(() => {
    const searchParams = new URLSearchParams(queryConfig);
    queryStringRef.current = searchParams;
  }, [queryConfig]);

  useEffect(() => {
    if (!data) return;
    setImages(images => [...images, ...data.photos]);
  }, [data]);

  return (
    <CollectionContainer>
      <TitleContainer>{ query }</TitleContainer>
      <CustomColumns isMasonry>
        {
          (images.length > 0) && images.map(image => (
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
        { isLoading && <Spinner /> }
      </Observer>
    </CollectionContainer>
  );
};

export default Collection;