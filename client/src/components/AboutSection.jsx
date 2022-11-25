import React from "react";
import PropTypes from "prop-types";

const AboutSection = (props) => {
	return (
		<>
			<p className="pb-4 font-bold text-[#333] text-2xl">About</p>
			<p className="text-[#333]">
				We make the perfect couple with a few fun quiz questions to help you see{" "}
				<br />
				if your partner is a great match for you.
			</p>
			<p className="text-[#333] pt-8 max-w-4xl place-self-center">
				From songs and poems to novels and movies, romantic love is one of the
				most enduring subjects for artworks <br />
				through the ages. But what about the science?
				<br /> Historical, cultural and even evolutionary evidence suggests love
				existed during ancient times and across many parts of the world.
				Romantic love has been found to exist in 147 of 166 cultures looked at
				in one study. The complexity of love has much to do with how people
				experience it differently and how it can change over time.
			</p>
			<div className="relative  mt-28 w-[80%] place-self-center">
				<img src={"images/about.png"} alt="abt" />
				<p className="absolute text-lg md:text-2xl text-white bottom-4 left-1/2 -translate-x-1/2">
					Over 13,000 couples take this quiz
				</p>
			</div>
		</>
	);
};

AboutSection.propTypes = {};

export default AboutSection;
