import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map( (card,index) => (
        <Card
          {...card}
          key ={'weak-key-' + index++}
        />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Card.propTypes = {
  cards: PropTypes.shape({
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
  })
};


export default Cards;