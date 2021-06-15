import React, { useEffect, useRef, useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import paintPoster from '../../assets/images/search-banner/paint.jpeg';

import {
  BannerContainer,
  VideoContainer,
  TitleContainer,
  FormContainer,
  InputContainer,
  AddIcon
} from './search-banner.styles';

const SearchBanner = () => {
  const videoEl = useRef(null);
  const [isCanPlay, setIsCanPlay] = useState(false);

  useEffect(() => {
    videoEl.current.poster = paintPoster
    videoEl.current.src = "https://player.vimeo.com/external/521018011.hd.mp4?s=0d75d0cddf424b1d16c574c80b68785342d3b5ba&profile_id=170&oauth2_token_id=57447761";
  }, []);

  const handleOnCanPlay = () => {
    videoEl.current.playbackRate = .5;
    videoEl.current.play();
    setIsCanPlay(true)
  };

  return (
    <BannerContainer>
      <VideoContainer
        ref={videoEl}
        loop
        muted
        isCanPlay={isCanPlay}
        onCanPlay={handleOnCanPlay}
      />
      <TitleContainer>
        Get Inspiration
      </TitleContainer>
      <FormContainer>
        <InputContainer 
          type="text" 
          name="create-category" 
          placeholder="Create new category"
        />
        <CustomButton
          type="submit"
          isPureButton
        >
          <AddIcon />
        </CustomButton>
      </FormContainer>
    </BannerContainer>
  );
};

export default SearchBanner;