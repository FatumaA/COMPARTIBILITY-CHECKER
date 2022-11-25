import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className="flex flex-row justify-between gap-4 py-5">
			<Link to="/">
				<img src={require("../logo-match.png")} alt="Kitchen Diary" />
			</Link>
			<div className="flex flex-row justify-between gap-10">
				<a href="/#about" className=" text-primary text-lg">
					About
				</a>
				<Link to="login" className=" text-primary text-lg">
					Log In
				</Link>
				<Link to="signup" className="btn-primary">
					Sign Up
				</Link>
			</div>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
