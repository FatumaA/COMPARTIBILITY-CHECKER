import React from "react";
import { testimonials } from "../data/testimonial";
import Testimonial from "../components/Testimonial";

const TestimonialSection = () => {
	return (
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
	);
};

export default TestimonialSection;
