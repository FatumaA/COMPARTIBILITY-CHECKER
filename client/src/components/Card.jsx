import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SET_LOGIN_PAGE } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
const Card = ({ srcImg, title, publishedAt }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_LOGIN_PAGE(false));
  }, []);

	console.log("in card", { srcImg, title });
	return (
		<div className="bg-white p-2 rounded-md w-fit">
			<img src={srcImg} alt="pic" />
			<p className="mt-1 mb-3 font-bold text-[#333]">{title}</p>
			<p>{publishedAt}</p>
		</div>
	);
};

Card.propTypes = {
	srcImg: PropTypes.string,
	title: PropTypes.string,
	publishedAt: PropTypes.string,
};

export default Card;
