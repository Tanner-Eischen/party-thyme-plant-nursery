import React, { useContext } from 'react';
import './products.css'
import { CartContext } from '../contexts/cartcontext.js'
import aloe from '../images/aloe.png'
import cacuts from '../images/cactus.png'
import lavender from '../images/lavender.png'
import mand from '../images/mand.png'
import philo from '../images/philo.png'
import rosemary from '../images/rosemary.png'




export const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, description: 'Soothing and healing plant.', image: '/aloe.png' },
  { id: 2, name: 'Cactus', price: 15, description: 'Low maintenance desert plant.', image: '/cactus.png' },
  { id: 3, name: 'Lavender', price: 10, description: 'Aromatic and calming.', image: '/lavender.png' },
  { id: 4, name: 'Rosemary', price: 10, description: 'Aromatic and calming.', image: '/rosemary.png' },
  { id: 5, name: 'Philodendren', price: 20, description: 'Aromatic and calming.', image: '/philo.png' },
  { id: 6, name: 'Mandevillia', price: 20, description: 'Aromatic and calming.', image: '/mand.png' },

]


function PlantList() {
  const { addToCart } = useContext(CartContext);
  console.log(addToCart)

  return (
    <>

      <div className='grid'>
        {plants.map((plant) => (
          <div key={plant.id} className="item-box">
            <h2>{plant.name}</h2><img src={plant.image} alt={plant.name} style={{ width: '70%', height: '70%' }}></img>
            <p>Price: ${plant.price} </p>
            <p>{plant.description}</p>

            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))};
      </div>
    </>


  );

}

export default PlantList;


