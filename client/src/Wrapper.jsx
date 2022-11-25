import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				{children}
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
