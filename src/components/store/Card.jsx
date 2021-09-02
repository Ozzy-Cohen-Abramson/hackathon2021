import React from 'react';
import './Card.css';
// import Sound from 'react-sound'
function Card({data, index}) {
  const { paySum, getSum, payCurrency,payCurrencyImg, getCurrency, buy, image } = data

  return (
    <div className='card'>
      {/* <Sound/> */}
      <img className='card-image' src={image} alt='' />
      <p id="price">
        {getSum} {getCurrency}
      </p>
      <button className='card-btn rainbow-button ' onClick={()=>buy(index)}>
        {paySum} <img src={payCurrencyImg} alt='' className="button-img"/>
      </button>
    </div>
  );
}

export default Card;
