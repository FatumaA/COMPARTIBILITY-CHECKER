import React from "react";
import { MdFavorite } from "react-icons/md";

const Hero = () => {
	return (
		<div className="flex flex-col bg-primary bg-opacity-20 rounded-b-[60%] content-center py-20 px-10 h-3/4 w-full">
			<p className="italic text-5xl text-center mb-4">Compartibility Checker</p>
			<p className="text-center pb-8">
				Take quizs to see if you match with your other half. <br />
				See what you both have in common.
			</p>
			<div className="flex flex-row place-content-center gap-4">
				<img
					src="https://placeimg.com/192/192/people"
					className="rounded-full h-28 md:h-40 w-28 md:w-40"
					alt="pic"
				/>
				<div className="flex flex-col gap-16 md:gap-24">
					{/* empty div to push the heart down */}
					<div></div>
					<div className="bg-accent bg-opacity-20 rounded-full p-4 h-fit">
						<MdFavorite
							size={window.innerWidth > 600 ? 48 : 24}
							color="#F97474"
						/>
					</div>
				</div>
				<img
					src="https://placeimg.com/192/192/people"
					className="rounded-full h-28 md:h-40 w-28 md:w-40"
					alt="pic"
				/>
			</div>
			<button className="btn-primary place-self-center mt-16">
				Get started
			</button>
		</div>
	);
};

export default Hero;
