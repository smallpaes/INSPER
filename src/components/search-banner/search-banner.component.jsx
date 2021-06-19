import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import Video from '../video/video.component';

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
      <FormContainer>
        <InputContainer 
          type='text'
          name='create-category'
          placeholder='Create new category'
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