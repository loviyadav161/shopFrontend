import React, { useState } from "react";
import axios from "axios";
// import { CartState } from "../context/Context";
import Card from "../UI/Card";

function Cart() {
  // const {
  //   state: { cart },
  // } = CartState();
  const [cartItems, setCartItems] = useState([]);
  async function onAdd(id) {
    console.log("me");
    await axios
      .post("https://shop-qmb6.onrender.com/cartItems/product/", id)
      .then(function (response) {
        setCartItems((oldItems) => [response.data, ...oldItems]);
      });
  }
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h1>Cart is Empty</h1>
          <button onClick={onAdd}>This is me</button>
        </div>
      ) : (
        <div>
          {cartItems.map((element, index) => {
            return (
              <Card
                id={element.id}
                title={element.title}
                image={element.imageUrl}
                descrip={element.description}
                price={element.price}
                onAdd={onAdd}
                key={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Cart;
