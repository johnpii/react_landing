import React from 'react';
import Resize from './Resize';

const Review = (props) => {
  const isPortrait = Resize();

  return (
    <div className={ isPortrait ? "review-card" : "review-card mobile" }>
      <div className={ isPortrait ? "review-content" : "review-content mobile" }>
        <div style={{ padding: "10px 20px 0 25px" }}>
          <div style={{ display: "flex", placeItems: "center",
                                        justifyContent: "space-between" }}>
            <h2 style={{ fontSize: isPortrait ? "" : "7vw" }}>{props.name}</h2>
            <a className="link" href={props.link} target="_blank">
              <p className="telegram-icon"/>
              <p className="array-corner-icon"/>
            </a>
          </div>
          <p className={ isPortrait ? "review" : "review mobile" }>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review;