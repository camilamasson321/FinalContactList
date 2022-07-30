import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  function del(id){
    actions.deleteContact(id)
  }
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
            <i className="fa-solid fa-location-dot"></i> {props.address}
          </div>
          <div className="phone">
            <i className="fa-solid fa-phone"></i> {props.phone}
          </div>
          <div className="email">
            <i className="fa-solid fa-envelope"></i> {props.email}
          </div>
          <div className="edit button">
            <Link to={`/add/${props.id}`}>
              <i className="fa-solid fa-pen"></i>
            </Link>
            <button onClick={()=> del(props.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
