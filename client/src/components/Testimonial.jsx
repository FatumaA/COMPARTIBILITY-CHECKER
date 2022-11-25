import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ srcImg, name, quote, stars }) => {
	return (
		<div className="flex flex-row gap-8 justify-center border-[1px] border-primary p-4 mx-4 w-fit">
			<img
				src={srcImg}
				className="rounded-full h-14 md:h-24 w-14 md:w-24"
				alt="pic"
			/>
			<div>
				<p className="mt-1 mb-3 min-h-[100px]">{quote}</p>
				<div className="flex flex-row py-4">{stars}</div>
			</div>
		</div>
	);
};

Testimonial.propTypes = {
	srcImg: PropTypes.string,
	name: PropTypes.string,
	quote: PropTypes.string,
	stars: PropTypes.array,
};

export default Testimonial;
