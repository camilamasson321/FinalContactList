import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
  return (
    <div className="card">
      <div className="card-body d-flex">
        <div className="picture">
          <img
            className="headshot"
            src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/04/linkedin-Headshots.png"
            alt="image cap"
          ></img>
        </div>
        <div className="content">
          <div className="card-text">
            <h5>{props.fullname}</h5>
          </div>
          <div className="address">
            <i class="fa-solid fa-location-dot"></i> {props.address}
          </div>
          <div className="phone">
            <i class="fa-solid fa-phone"></i> {props.phone}
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i> {props.email}
          </div>
          <div className="edit button">
            <i class="fa-solid fa-pen"></i>
          </div>
          <div className="trashcan">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
