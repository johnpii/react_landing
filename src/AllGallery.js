import React from 'react';
import Carousel from './Carousel/Carousel';
import Resize from './Resize';

const AllGallery = () => {
  const isPortrait = Resize();

  return (
    <div style={{ pointerEvents: isPortrait ? "" : "none" }}>
      <Carousel direction="left"/>
      <Carousel direction="right"/>
    </div>
  );
};

export default AllGallery;