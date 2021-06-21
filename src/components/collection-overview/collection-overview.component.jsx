import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import CustomButton from '../custom-button/custom-button.component';
import Skeleton from '../skeleton/Skeleton.component';

import useFetch from '../../effects/use-fetch.effect';

import {
  CollectionContainer,
  TitleContainer
} from './collection-overview.styles';

const Collection = ({ 
  queries, 
  title
}) => {
  const queriesRef = useRef(queries);
  const searchParams = new URLSearchParams(queriesRef.current);
  const { 
    data, 
    isLoading
  } = useFetch(process.env.REACT_APP_PEXELS_SEARCH_URL, 1, searchParams);

  return (
    <CollectionContainer>
      <TitleContainer>{title}</TitleContainer>
      <CustomColumns isGrid>
        {
          (isLoading || !data ? Array.from(new Array(6)) : data.photos).map((image, index) => (
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
      <CustomButton 
        as={Link}
        $isOutlineButton
        to={`/collection/${title}`}
      >
        Find Out More
      </CustomButton>
    </CollectionContainer>
  );
};

Collection.propTypes = {
  queries: PropTypes.shape({
    query: PropTypes.string.isRequired,
    per_page: PropTypes.number,
    orientation: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    locale: PropTypes.string,
    page: PropTypes.number
  }),
  title: PropTypes.string.isRequired
};

export default Collection;