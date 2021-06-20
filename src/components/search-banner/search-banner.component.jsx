import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import Video from '../video/video.component';

import { addCollection } from '../../redux/collections/collections.actions';

import paintPoster from '../../assets/images/search-banner/paint.jpeg'

import {
  BannerContainer,
  TitleContainer,
  FormContainer,
  InputContainer,
  AddIcon
} from './search-banner.styles';

const SearchBanner = () => {
  const VIDEO_SRC = 'https://player.vimeo.com/external/521018011.hd.mp4?s=0d75d0cddf424b1d16c574c80b68785342d3b5ba&profile_id=170&oauth2_token_id=57447761';

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const input = event.target.value.trim();
    setSearchString(input);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchString === '') return;
    dispatch(addCollection(searchString));
    setSearchString('');
  };

  return (
    <BannerContainer>
      <Video
        loop
        muted
        src={VIDEO_SRC}
        speed={0.5}
        poster={paintPoster}
      />
      <TitleContainer>
        Get Inspiration
      </TitleContainer>
      <FormContainer
        onSubmit={handleFormSubmit}
      >
        <InputContainer 
          type='text'
          name='create-category'
          value={searchString}
          placeholder='Create new category'
          onInput={handleInputChange}
        />
        <CustomButton
          type='submit'
          isPureButton
        >
          <AddIcon />
        </CustomButton>
      </FormContainer>
    </BannerContainer>
  );
};

export default SearchBanner;