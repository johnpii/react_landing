import React, { useState } from 'react';
import './Adds.css';
import Resize from '../Resize';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('/public/images/Adds', false, /\.(png|jpe?g|svg)$/));

const Adds = () => {
  const isPortrait = Resize();
  const [visibleRows, setVisibleRows] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerRow = 4;

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showMoreImages = () => {
    setVisibleRows(visibleRows + 2);
  };

  const renderImages = () => {
    const visibleImages = images.slice(0, visibleRows * imagesPerRow);
    return visibleImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt=""
        className={ isPortrait ? "gallery-image" : "gallery-image mobile" }
        onClick={() => setSelectedImage(image)}
      />
    ));
  };

  return (
    <div>
      {isPortrait ? (
      <div className="image-gallery" style={{ padding: "0 30px 0" }}>
        <div className="image-grid">
          {renderImages()}
        </div>
        {visibleRows * imagesPerRow < images.length && (
          <button className="show-more-button" onClick={showMoreImages}>
            Больше работ<p className="more-icon"></p>
          </button>
        )}
        {selectedImage && (
          <div className="modal-window-image" onClick={closeModal}>
            <div 
              style={{ display: "flex" }}
              onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="" className="modal-image"/>
              <p><button 
                onClick={closeModal}
                className="modal-image-close-button"
              ></button></p>
            </div>
          </div>
        )}
      </div>)
      : (
      <div>
        <div className="filter-scrollbar" style={{ padding: "2vw", margin: "0" }}>
          {renderImages()}
        </div>
        {selectedImage && (
          <div className="modal-window-image" onClick={closeModal}>
            <div 
              style={{ display: "flex" }}
              onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="" className="modal-image"/>
              <p><button 
                onClick={closeModal}
                className="modal-image-close-button mobile"
              ></button></p>
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
};

export default Adds;