import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../components/pages/data'; 

function ProductDetail() {
  const { name } = useParams();

  // Find the product in the data array that matches the name
  const product = Data.find(product => product.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.Desc1}</p>
      <p>{product.Desc2}</p>
      <p>Product: {product.product}</p>
      {/* Add more product details here */}
      <img src={product.img1} alt={`Product: ${product.name}`} />
      <img src={product.img2} alt={`Product: ${product.name}`} />
      <img src={product.img3} alt={`Product: ${product.name}`} />
      {/* You can display additional product images here */}
    </div>
  );
}

export default ProductDetail;
