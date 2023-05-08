import React from 'react';

const business = {
  name: 'Lilia',
  image: '/lilia.jpg',
  address: "567 Union Avenue",
  city: "Brooklyn",
  state: 'NY',
  zipcode: 11211,
  category: 'italian',
  rating: 4.4,
  reviewCount: "1501 ⭐️"
};



export function Business() {

  return (
    <div>
      <img src={business.image} alt='Lilia' width="300em" />
      <h2>{business.name}</h2>
      <div>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.zipcode}</p>
      </div>
      <div>
        <h3>{business.category}</h3>
        <p>{business.rating}</p>
        <p>{business.reviewCount}</p>
      </div>
    </div>
  )
}


