import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
