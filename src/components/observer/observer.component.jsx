import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

import useIntersectionObserver from '../../effects/use-intersection-observer.effect';

const Observer = ({ 
  children, 
  onIntersecting, 
  ...otherProps
}) => {
  const observedTargetRef = useRef(null);
  const observerOptions = {
    root: otherProps.root || null,
    rootMargin: otherProps.rootMargin || '0px',
    threshold: otherProps.threshold || 0
  };
  const isIntersecting = useIntersectionObserver(observedTargetRef, observerOptions);

  useEffect(() => {
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

Observer.propTypes = {
  children: PropTypes.node, 
  onIntersecting: PropTypes.func, 
};

export default Observer;