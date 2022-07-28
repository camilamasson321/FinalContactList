import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	let history = useHistory()
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		fullName: "",
		email: "",
		address: "",
		phone: "",
	})

	const handleInputChange = e =>{
		const {name, value} = e.target;
		setContact({
			...contact, 
			[name]:value
		});
	}
	const handleSubmit = e => {
		e.preventDefault(); 
		actions.addContact(contact)
		history.push("/")
	}

	console.log(contact)
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label> Full Name
					<input name="fullName" value={contact.fullName} onChange={handleInputChange}/>
				</label>
				<label> Email
					<input name="email" value={contact.email} onChange={handleInputChange}/>
				</label>
				<label> Address
					<input name="address" value={contact.address} onChange={handleInputChange}/>
				</label>
				<label> Phone Number
					<input name="phone" value={contact.phone} onChange={handleInputChange}/>
				</label>
			</form>
			<button type="submit">
				submit
			</button>
		</div>
	);
};
