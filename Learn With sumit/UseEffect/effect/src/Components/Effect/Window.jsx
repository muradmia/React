import React, { useState, useEffect } from 'react';

const WindowResizeExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures this runs only once

  return <h1>Window Width: {windowWidth}</h1>;
};

export default WindowResizeExample;