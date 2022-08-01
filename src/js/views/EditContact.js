import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  //grab param from weblink
  let { id } = useParams();
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug: "camila_contact_list",
  });
  const getContact = store.contacts;
  //Filter contact and only get object containing id
  const editContact = getContact.filter((contact, index) => {
    return contact.id === id;
  })[0];

  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);

  // function inputValue(e) {
  //   const { name, value } = e.target;
  //   setTextEntered((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value,
  //     };
  //   });
  // }
  const handleSubmit = (event) => {
    if (contact !== "") {
      actions.editContact(contact);
      history.push("/");
    }
    event.preventDefault();
    setContact({
      fullName: "",
      email: "",
      address: "",
      phone: "",
      agenda_slug: "camila_contact_list",
    });
  };

  return (
    <div className="input-body">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name
            <input
              className="form-control"
              type="text"
              value={contact.full_name}
              onChange={(e) =>
                setContact({ ...contact, full_name: e.target.value })
              }
            ></input>
          </label>
        </div>

        <div className="form-group">
          <label>
            Email
            <input
              className="form-control"
              type="text"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            ></input>
          </label>
        </div>

        <div className="form-group">
          <label>
            Address
            <input
              className="form-control"
              type="text"
              value={contact.address}
              onChange={(e) =>
                setContact({ ...contact, address: e.target.value })
              }
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone Number
            <input
              className="form-control w-80"
              type="text"
              value={contact.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            ></input>
          </label>
        </div>
      </form>
      <button
        className="btn btn-primary me-1"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save
      </button>
      <Link to="/">
        <button className="btn btn-primary " href="#" role="button">
          Get back to contacts
        </button>
      </Link>
    </div>
  );
};
