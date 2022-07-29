import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Contacts from "/workspace/FinalContactList/src/js/component/Contacts.js"

export const ContactList = ()=> {

	return (
		<div className="jumbotron">

			<hr className="my-4" />
			<Link to="/add">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Add Contact
				</span>
			</Link>
			< Contacts/>
		</div>
	);
};


