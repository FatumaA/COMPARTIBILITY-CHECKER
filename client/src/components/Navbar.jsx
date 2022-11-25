import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdClear, MdMenu } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const loginPage = useSelector((state) => state.auth.logInPage);
  const handleClick = () => {
    setClick(!click);
  };

  const handleLogin = () => {};
  return (
    <>
      {/* Main nav */}
      <div className="hidden md:block sticky">
        <nav className="flex flex-row justify-between gap-4 py-5 container mx-auto">
          <Link to="/">
            <img src={"images/logo-match.png"} alt="logo" />
          </Link>
          {!loginPage ? (
            <>
              <div className="flex flex-row justify-between gap-10">
                <a
                  href="/#about"
                  className="text-primary text-lg hover:text-hover"
                >
                  About
                </a>
                <Link
                  to="login"
                  className="text-primary text-lg hover:text-hover"
                >
                  Log In
                </Link>
                <Link to="signup" className="btn-primary -mt-1 ">
                  Sign Up
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="block md:hidden sticky">
        <>
          <nav className="lg:hidden gap-4 py-5 px-4">
            <div className="flex flex-row justify-between">
              <Link to="/">
                <img src={"images/logo-match.png"} alt="logo" />
              </Link>
              {!loginPage ? (
                <>
                  <div>
                    <MdMenu
                      style={{
                        display: click ? "none" : "block",
                        cursor: "pointer",
                      }}
                      size={32}
                      className=" text-primary"
                      onClick={handleClick}
                    />
                    <MdClear
                      style={{
                        display: click ? "block" : "none",
                        cursor: "pointer",
                      }}
                      className=" text-primary"
                      size={32}
                      onClick={handleClick}
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            {!loginPage ? (
              <>
                <div
                  style={{ display: click ? "block" : "none" }}
                  className="z-10 border-2 border-primary p-5 m-4"
                >
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/"
                      onClick={handleClick}
                      className="text-primary text-lg hover:text-hover"
                    >
                      Home
                    </Link>
                    <a
                      href="/#about"
                      onClick={handleClick}
                      className="text-primary text-lg hover:text-hover"
                    >
                      About
                    </a>
                    <Link
                      to="login"
                      onClick={handleLogin}
                      className="text-primary text-lg hover:text-hover"
                    >
                      Log In
                    </Link>
                    <Link
                      to="signup"
                      onClick={handleLogin}
                      className="btn-primary px-5 w-fit"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </nav>
        </>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
