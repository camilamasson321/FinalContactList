import React, {useContext} from "react";
// import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import { Context } from "../store/appContext";

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const contact = store.contacts;

return contact.map ((items, index) =>{
  return (
    < ContactCard
    key ={index}
    id ={items.id}
    fullname={items.full_name}
    address = {items.address}
    phone ={items.phone}
    email={items.email}
    />
  );
});
};

export default Contacts;