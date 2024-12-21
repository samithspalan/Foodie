import React from "react";

const DishCard = ({ dish }) => {
  console.log(dish)
  console.log("dish")
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />      
      <h3>{dish.name}</h3>
      <p>{dish.price}</p>
      <button>Add to Cart</button>
    </div>
    
  );
  
};

export default DishCard;