import React, { useState, useEffect } from 'react';

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {backToTopButton && (
        <button
          type="button"
          onClick={scrollUp}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            fontSize: '24px',
            color: 'red',
          }}
        >
          TO TOP
        </button>
      )}
    </>
  );

};
