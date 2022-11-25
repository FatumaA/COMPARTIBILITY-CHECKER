import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className="flex flex-row justify-between mx-3 gap-4">
			<Link to="/">Logo</Link>
			<div className="flex flex-row justify-between gap-10">
				<a href="/#about">About</a>
				<Link to="login">Log In</Link>
				<Link to="signup">Sign Up</Link>
			</div>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
