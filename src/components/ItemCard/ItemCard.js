import React from "react";
import "./ItemCard.css";

const ItemCard = props => (
    <div 
        className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div
            className="img-container"
            id={props.id} >
            <img
                alt={props.name}
                src={props.image} />
        </div>
    </div>
);

export default ItemCard;