import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = initialValue => {
  const [isActive, setIsActive] = useState(initialValue);
  console.log('Initial Value: ', initialValue);
  const refs = useRef(null);

  useEffect(() => {
    const handleClick = e => {
      if (refs.current && !refs.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  return { refs, isActive, setIsActive };
};
