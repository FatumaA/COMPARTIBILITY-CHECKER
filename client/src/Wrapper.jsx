import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Outlet />
			<Footer />
		</>
	);
};

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
