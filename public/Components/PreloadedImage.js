import React from 'react'
import { useState, useEffect } from 'react';

const PreloadedImage = ({ src }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const image = new Image();
      image.src = src;
      image.onload = () => setLoaded(true);
    }, [src]);
  
    return <img src={src} alt="" style={{ display : 'none' }} />;
  };

export default PreloadedImage