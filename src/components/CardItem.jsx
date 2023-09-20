import React from 'react';
import { Link } from 'react-router-dom';
function CardItem(props) {
 

  console.log(props.img1);
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.product}>
          <figure className='cards__item__pic-wrap' data-category={props.name}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.img1}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
