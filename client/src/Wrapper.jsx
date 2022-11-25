import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
	return (
		<div className=" container mx-auto px-4">
			<Navbar />
			{children}
			<Outlet />
			<Footer />
		</div>
	);
};

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
