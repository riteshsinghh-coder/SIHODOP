import React from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css"

function CardItem(props) {
 

  console.log(props.img4);
  return (
    <>
      <li className='cards__item'>
      <Link className='cards__item__link' to={props.product}>
  <figure className='cards__item__pic-wrap' data-category={props.name}>
    <img
      className='cards__item__img'
      alt={`Product: ${props.text}`}
      src={props.img4}
      style={{ width: '100%', height: 'auto' }}
    />
  </figure>
</Link>
      </li>
    </>
  );
}

export default CardItem;
