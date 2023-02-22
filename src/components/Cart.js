import React from "react";
import { CartState } from "../context/Context";
import Card from "../UI/Card";

function CartScreen() {
  const {
    state: { cart },
  } = CartState();

  return (
    <>
      {cart.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div className="products">
          {cart.map((element, index) => {
            return (
              <Card
                id={element.id}
                title={element.title}
                image={element.imageUrl}
                key={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default CartScreen;