import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (ref, options) => {
  const [targetElement, setTargetElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  const disconnectObserver = () => observerRef.current.disconnect();

  const callbackFunction = (([entry]) => {
    const isElementIntersecting = entry.isIntersecting;
    setIsIntersecting(isElementIntersecting);
  });

  useEffect(() => {
    setTargetElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!targetElement) return;
    // disconnect upon target element change
    observerRef.current && disconnectObserver();
    // init observer
    const observer = observerRef.current = new IntersectionObserver(callbackFunction, options);
    // observe target element
    observer.observe(targetElement);

    return () => disconnectObserver();
  }, [targetElement, options]);

  return isIntersecting;
};

export default useIntersectionObserver;