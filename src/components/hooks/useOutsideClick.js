import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = initialValue => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  return { ref, isActive, setIsActive };
};
