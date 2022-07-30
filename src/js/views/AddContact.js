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
	})

	const handleInputChange = e =>{
		const {name, value} = e.target;
		setContact({
			...contact, 
			[name]:value
		});
	}
	function handleSubmit() {
		// e.preventDefault(); 
		console.log("inside handleSubmit")
		actions.addContact(contact)
		history.push("/")
	}

	return (
		<div className="container">
			<form >
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
			<button onClick={() => {handleSubmit()}}>
				submit
			</button>
		</div>
	);
};

export default AddContact;