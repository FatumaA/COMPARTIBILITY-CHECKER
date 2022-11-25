import React from "react";
import PropTypes from "prop-types";

const Card = ({ srcImg, title, publishedAt }) => {
	console.log("in card", { srcImg, title });
	return (
		<div className="bg-white p-2 rounded-md w-fit ">
			<img src={srcImg} alt="pic" />
			<p className="mt-1 mb-3 font-bold text-[#333]">{title}</p>
			<p>{publishedAt}</p>
		</div>
	);
};

Card.propTypes = {
	// props: PropTypes.object,
	srcImg: PropTypes.string,
	title: PropTypes.string,
	publishedAt: PropTypes.string,
};

export default Card;
