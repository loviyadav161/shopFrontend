import React from "react";
// import { CartState } from "../context/Context";
import "./Card.css";
function Card({ id, image, descrip, price, title, onAdd }) {
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();
  return (
    <div className="cardMain">
      <img style={{ width: "500px", height: "300px" }} src={image} alt="" />
      <div className="cardBody">
        <p>{descrip}</p>
        <p>Price : {price}</p>
        <h5>{title}</h5>
        <button className="btnAdd" onClick={onAdd}>
          {" "}
          Add to Cart{" "}
        </button>
        {/* {items.some((p) => p.id === props.id) ? (
          <button className="btnRemove"> Remove From Cart </button>
        ) : (
          <button className="btnAdd" onClick={props.add}>
            {" "}
            Add to Cart{" "}
          </button>
        )} */}
      </div>
    </div>
  );
}

export default Card;
