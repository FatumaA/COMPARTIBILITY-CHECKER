import React, { useEffect } from "react";
import { cardData } from "../data/cardData";
import { SET_LOGIN_PAGE } from "../redux/features/auth/authSlice";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
const CardSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SET_LOGIN_PAGE(false));
  }, []);
  return (
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
  );
};

export default CardSection;
