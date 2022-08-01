import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../component/Contacts.js"

export const ContactList = ()=> {
	return (
		<div className="jumbotron">
			<hr className="my-4" />
			<Link to="/add">
				<span className="btn btn-primary btn-lg mb-2 mx-5" role="button">
					Add Contact
				</span>
			</Link>
			<Contacts />
		</div>
	);
};
