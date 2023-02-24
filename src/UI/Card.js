import React from "react";
import { CartState } from "../context/Context";
import "./Card.css";
function Card(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="cardMain">
      <img
        style={{ width: "500px", height: "300px" }}
        src={props.image}
        alt=""
      />
      <div className="cardBody">
        <p>{props.descrip}</p>
        <p>Price : {props.price}</p>
        <h5>{props.title}</h5>
        {cart.some((p) => p.id === props.id) ? (
          <button className="btnRemove">
            <a
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
            >
              {" "}
              Remove From Cart{" "}
            </a>
          </button>
        ) : (
          <button className="btnAdd">
            {" "}
            <a
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
            >
              {" "}
              Add to Cart{" "}
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
