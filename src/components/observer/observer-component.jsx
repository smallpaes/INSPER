import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

import useIntersectionObserver from '../../effects/use-intersection-observer.effect';

const Observer = ({ children, onIntersecting, ...otherProps }) => {
  const observedTargetRef = useRef(null);
  const observerOptions = {
    root: otherProps.root || null,
    rootMargin: otherProps.rootMargin || '0px',
    threshold: otherProps.threshold || 0
  };
  const isIntersecting = useIntersectionObserver(observedTargetRef, observerOptions);

  useEffect(() => {
    console.log(isIntersecting)
    if (!isIntersecting) return;
    onIntersecting();
  }, [isIntersecting, onIntersecting]);

  return (
    <div
      className='observer'
      ref={observedTargetRef}
    >
      { children }
    </div>
  );
};

export default Observer;