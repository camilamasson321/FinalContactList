import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const AddContact = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  function handleSubmit() {
    // e.preventDefault();
    console.log("inside handleSubmit");
    actions.addContact(contact);
    history.push("/");
  }

  return (
    <div className="container input-body">
      <form>
        <div className="form-group">
          <label>
            {" "}
            Full Name
            <input
              className="form-control"
              name="fullName"
              value={contact.fullName}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Email
            <input
              className="form-control"
              name="email"
              value={contact.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Address
            <input
              className="form-control"
              name="address"
              value={contact.address}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Phone Number
            <input
              className="form-control"
              name="phone"
              value={contact.phone}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </form>
      <button className="btn btn-primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddContact;
