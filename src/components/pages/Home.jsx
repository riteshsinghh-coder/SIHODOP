import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import data from './data';
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
              {data.map((item, index) => (
                <CardItem
                  key={index} // You should set a unique key for each CardItem
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
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
