import React from 'react';
import PropTypes from 'prop-types';

const Card = ({img,author, headline}) => {
  return (
    <div className="card">
      <div className="headline">{ headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={img /* image source goes here */} alt={author}/>
        </div>
        <span>By { author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired

};

export default Card;
