import React from "react";
import PropTypes from "prop-types";

import Hero from "../components/Hero";

import AboutSection from "../components/AboutSection";
import CardSection from "../components/CardSection";
import TestimonialSection from "../components/TestimonialSection";
// import card1 from "../images/card1.png";

const Home = (props) => {
	return (
		<div>
			<Hero />

			<div
				id="about"
				className="flex flex-col container mx-auto text-center py-24 px-6"
			>
				<AboutSection />
			</div>
			<CardSection />

			<TestimonialSection />
		</div>
	);
};

Home.propTypes = {};

export default Home;
