import React from "react";
import { CartState } from "../context/Context";
import './Card.css'
function Card(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="cardMain">
      <img src={props.image} alt="" />
      <div >
        <h5>{props.title}</h5>
        {cart.some((p) => p.id === props.id) ? (
          <a
            className="btnRemove"
            onClick={() => {
              dispatch({
                type: "REMOVE",
                payload: {
                  id: props.id,
                  title: props.title,
                  imageUrl: props.image,
                },
              });
            }}
          > Remove From Cart </a>
        ) : (
          <a 
            className="btnAdd"
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: {
                  id: props.id,
                  title: props.title,
                  imageUrl: props.image,
                },
              });
            }}
          > Add to Cart </a>
        )}
      </div>
    </div>
  );
}

export default Card;