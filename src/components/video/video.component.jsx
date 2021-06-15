import React, { useEffect, useRef, useState } from 'react';

import { VideoContainer } from './video.styles';


const Video = ({ 
  src,
  poster,
  speed = 1,
  ...props 
}) => {
  const videoEl = useRef(null);
  const [isCanPlay, setIsCanPlay] = useState(false);

  useEffect(() => {
    videoEl.current.poster = poster;
    videoEl.current.src = src;
  }, [src, poster]);

  const handleOnCanPlay = () => {
    videoEl.current.playbackRate = speed;
    videoEl.current.play();
    setIsCanPlay(true)
  };

  return (
    <VideoContainer
      { ...props }
      ref={videoEl}
      isCanPlay={isCanPlay}
      onCanPlay={handleOnCanPlay}
    />
  );
};

export default Video;