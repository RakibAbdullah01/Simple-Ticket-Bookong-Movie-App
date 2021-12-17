import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <img src={item.image.medium} alt="" />
      <div className="info">
        <div className="buy">
          <h1>{item.name}</h1>
          <div className="high-info">
            <p>
              {" "}
              Runtime: <small>{item.runtime}</small>{" "}
            </p>
          </div>
          <Link to={`/movie/${item.id}`}>
            <button className="button">Buy Ticket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
