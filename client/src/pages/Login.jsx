import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GoogleLogo from "../assets/google-logo.png";
import Avatar from "../assets/Group 35125.png";
import Facebook from "../assets/ci_facebook.png";
import Whatsapp from "../assets/ri_whatsapp-fill.png";
import OauthPopup from "react-oauth-popup";
import Instagram from "../assets/ph_instagram-logo-fill.png";
import { useDispatch } from "react-redux";
import { SET_LOGIN_PAGE } from "../redux/features/auth/authSlice";
import Swal from "sweetalert2";

const Login = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_LOGIN_PAGE(true));
  }, []);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  // console.log(loginData);

  const handleLogin = async () => {
    const res = await fetch("https://compatibility.onrender.com/auth/google", {
      method: "GET",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    // if (data.token) {
    //   Swal.fire("Success", response.message, "success", {
    //     buttons: false,
    //     timer: 2000,
    //   })

    // } else {
    //   Swal.fire("Failed", response.message, "error");
    // }
  };

  const onCode = (code, params) => {
    console.log("wooooo a code", code);
    console.log(
      "alright! the URLSearchParams interface from the popup url",
      params
    );
  };

  const onClose = () => {
    console.log("closed!");
  };

  return (
    <div className="flex items-center justify-center pt-10 pb-14 ">
      <div className=" w-full flex flex-col items-center justify-center lg:w-[733px] h-[850px] md:w-[700px]  bg-[#8B80B6] bg-opacity-10 rounded-[20px] ">
        <div className="  flex flex-col items-center justify-center  gap-12 ">
          <div className="flex flex-wrap justify-center">
            <div>
              <img
                src={Avatar}
                alt="..."
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>

          <OauthPopup
            url="https://compatibility.onrender.com/auth/google"
            onCode={onCode}
            onClose={onClose}
          >
            <button
              onClick={handleLogin}
              className="flex flex-row justify-center items-center  px-[50px] gap-6  py-[16px] lg:px-[109px] lg:gap-[8px]  md:px-[109px] md:gap-[8px]  h-[56px] border border-solid border-[#8B80B6] rounded-[8px] "
            >
              <img src={GoogleLogo} alt="Google-logo" />
              <h2 className=" text-[#444444] font-sans font-medium text-[16px] leading-[14px] lg:text-[20px] lg:leading-[20px] md:text-[20px] md:leading-[20px]  ">
                Continue with Google
              </h2>
            </button>
          </OauthPopup>

          <div className=" flex flex-col gap-6  ">
            <hr className=" w-[350px] lg:w-[642px] md:w-[642px] h-0 border border-solid border-[#E0DFE6]   " />
            <div className="orLogInWith flex flex-col gap-1 items-center ">
              <p className=" font-[sans] font-normal text-[12px] leading-[16px] text-center items-center ">
                Or Login via
              </p>
              <ul className=" flex flex-row gap-[4px] p-0 ">
                <li className="cursor-pointer">
                  {" "}
                  <a href="/"></a>
                  <img src={Facebook} alt="Facebook" />
                </li>
                <li className="cursor-pointer">
                  {" "}
                  <a href="/"></a>
                  <img src={Whatsapp} alt="Whatsapp" />
                </li>
                <li className="cursor-pointer">
                  {" "}
                  <a href="/"></a>
                  <img src={Instagram} alt="Instagram" />
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;

export const handleLogout = () => {
  localStorage.removeItem("loginData");
  setLoginData(null);
};
