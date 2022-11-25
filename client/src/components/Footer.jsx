import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-primary text-white py-16">
			<div className="flex flex-col md:flex-row justify-between container mx-4 md:mx-auto">
				<div className="flex flex-col gap-8">
					<Link to="/">
						<img src={"images/logo-white.png"} alt="logo" />
					</Link>
					<div>
						<p className="pb-1">Subscribe to my Newsletter</p>
						<div className="bg-white rounded-md p-1 text-textDark w-fit">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									e.target.reset();
								}}
							>
								<input
									type="email"
									placeholder="Enter Email"
									className="border-none outline-none w-60"
								/>
								<button type="submit" className="btn-accent">
									Join
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-8 md:flex-row">
					<div className="flex flex-col ">
						<a href="/#about" className="font-medium text-xl mb-5 mt-4 md:mt-0">
							About
						</a>
						<a href="/#about" className="mb-4">
							About
						</a>
						<Link to="">FAQ</Link>
					</div>
					<div className="flex flex-col">
						<Link to="" className="font-medium text-xl mb-5">
							Terms
						</Link>
						<Link to="" className="mb-4">
							Terms of use
						</Link>
						<Link to="">Privacy Policy</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col-reverse md:flex-row justify-between pt-10 container mx-4 md:mx-auto">
				<div className="flex flex-row items-center gap-2">
					<p> &#169; 2022 COPYRIGHT - </p>
					<Link to="/">
						<img
							src={"images/logo-white.png"}
							alt="logo"
							style={{ width: "120px" }}
						/>
					</Link>
				</div>
				<div className="flex flex-row gap-8 pb-2 md:pb-0">
					<div className="rounded-full bg-white bg-opacity-50 w-fit p-1 cursor-pointer">
						<AiOutlineInstagram />
					</div>
					<div className="rounded-full bg-white bg-opacity-50 w-fit p-1 cursor-pointer">
						<AiOutlineTwitter />
					</div>
					<div className="rounded-full bg-white bg-opacity-50 w-fit p-1 cursor-pointer">
						<FaFacebookF />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
