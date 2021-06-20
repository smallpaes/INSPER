import React from 'react';
import PropTypes from 'prop-types';

import CustomColumns from '../custom-columns/custom-columns.components';
import ImageCard from '../image-card/image-card.component';
import CustomButton from '../custom-button/custom-button.component';
import Skeleton from '../skeleton/Skeleton.component';

import useFetch from '../../effects/use-fetch.effect';

import {
  CollectionContainer,
  TitleContainer
} from './collection-overview.styles';

const Collection = ({ queries }) => {

  const { 
    data, 
    isLoading
  } = useFetch(process.env.REACT_APP_PEXELS_SEARCH_URL, queries);

  return (
    <CollectionContainer>
      <TitleContainer>Nature</TitleContainer>
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
      <CustomButton isOutlineButton>
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
  })
};

export default Collection;