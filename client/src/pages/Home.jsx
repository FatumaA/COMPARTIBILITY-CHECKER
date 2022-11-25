import React from "react";
import PropTypes from "prop-types";
import Hero from "../components/Hero";

const Home = (props) => {
	return (
		<div>
			<Hero />
			<div id="about">About</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
