import React from "react";
import PropTypes from "prop-types";
import { cardData } from "../data/cardData";
import { testimonials } from "../data/testimonial";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Testimonial from "../components/Testimonial";
// import card1 from "../images/card1.png";

const Home = (props) => {
	console.log("carddata", cardData);
	return (
		<div>
			<Hero />
			<div
				id="about"
				className="flex flex-col container mx-auto text-center py-24 px-6"
			>
				<p className="pb-4 font-bold text-[#333] text-2xl">About</p>
				<p className="text-[#333]">
					We make the perfect couple with a few fun quiz questions to help you
					see <br />
					if your partner is a great match for you.
				</p>
				<p className="text-[#333] pt-8 max-w-4xl place-self-center">
					From songs and poems to novels and movies, romantic love is one of the
					most enduring subjects for artworks <br />
					through the ages. But what about the science?
					<br /> Historical, cultural and even evolutionary evidence suggests
					love existed during ancient times and across many parts of the world.
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
			</div>
			<div className="flex flex-col bg-primary bg-opacity-20 py-6 px-6">
				<p className="font-semibold text-[#333]  text-3xl text-center pb-8">
					Our Newsletter
				</p>
				<div className="flex flex-col md:flex-row gap-4 justify-between container mx-4 md:mx-auto">
					{cardData.map((c, index) => (
						<div key={index}>
							<Card
								srcImg={c.srcImg}
								title={c.title}
								publishedAt={c.publishedAt}
							/>
						</div>
					))}
				</div>
				<button className="btn-primary w-fit place-self-center my-16">
					View now
				</button>
			</div>

			<div className="flex flex-col pt-28 px-4">
				<p className="font-semibold text-[#333]  text-3xl text-center pb-8">
					What our couples say
				</p>
				<div className="flex flex-col md:flex-row gap-2 justify-between container mx-4 md:mx-auto mb-8">
					{testimonials.map((t, index) => (
						<div key={index}>
							<Testimonial
								srcImg={t.avatar}
								name={t.name}
								quote={t.quote}
								stars={t.stars}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {};

export default Home;
