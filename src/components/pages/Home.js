import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Data from './data';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <div className='cards'>
        <h1>Shop By District</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {Data.map((item, index) => (
                <CardItem
                  key={index} 
                  id={item.id}
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  img4={item.img4}
                  name={item.name}
                  Desc1={item.Desc1}
                  Desc2={item.Desc2}
                  product={item.product}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
