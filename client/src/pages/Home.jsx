import React from "react";
import PropTypes from "prop-types";
import Hero from "../components/Hero";

const Home = (props) => {
	return (
		<div>
			<Hero />
			<div
				id="about"
				className="flex flex-col container mx-auto text-center py-24 px-6"
			>
				<p className="pb-4 font-bold text-2xl">About</p>
				<p>
					We make the perfect couple with a few fun quiz questions to help you
					see <br />
					if your partner is a great match for you.
				</p>
				<p className="pt-8 max-w-4xl place-self-center">
					From songs and poems to novels and movies, romantic love is one of the
					most enduring subjects for artworks <br />
					through the ages. But what about the science?
					<br /> Historical, cultural and even evolutionary evidence suggests
					love existed during ancient times and across many parts of the world.
					Romantic love has been found to exist in 147 of 166 cultures looked at
					in one study. The complexity of love has much to do with how people
					experience it differently and how it can change over time.
				</p>
				<div class="relative  mt-28 w-[80%] place-self-center">
					<img src={require("../images/about.png")} alt="abt" />
					<p class="absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2">
						Over 13,000 couples take this quiz
					</p>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
