import React from 'react';
import '../App.css';

const business = {
  name: 'Lilia',
  image: '/lilia.jpg',
  address: "567 Union Avenue",
  city: "Brooklyn",
  state: 'NY',
  zipcode: 11211,
  category: 'italian',
  rating: 4.4,
  reviewCount: "1501"
};



export function Business() {

  return (
    <div className="business">
      <img src={business.image} alt='Lilia' width="300em" />
      <h2>{business.name}</h2>
      <div className="info">
      <div>
        <p>{`${business.address},`}</p>
        <p>{`${business.city},`}</p>
        <p>{business.zipcode}</p>
      </div>
      <div>
        <h3>{business.category.toUpperCase()}</h3>
        <p>{`${business.rating}  ⭐️`}</p>
        <p>{`${business.reviewCount} reviews`}</p>
      </div>
      </div>
    </div>
  )
}


