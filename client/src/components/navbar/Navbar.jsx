import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import airplane from "../../assets/airplane-fly.jpg";
import classes from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={airplane} alt="" className={classes.fly} />
            <h2 className="ml-3 text-xl">Traveller</h2>
          </Link>
        </div>
        <div className={classes.center}>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-[#ee9d06] cursor-pointer" href="#">
              Home
            </Link>
            <a
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#about"
            >
              About
            </a>
            <a
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#services"
            >
              Services
            </a>
            <a
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#suggested"
            >
              Suggested
            </a>
          </nav>
        </div>
        <div className={classes.right}>
          {!user ? (
            <>
              <Link to="/login">
                <button className={classes.login}>Login</button>
              </Link>
              <Link to="/signup">
                <button className={classes.signup}>Signup</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/create">Create</Link>
              <p className={classes.username}>{user.username}</p>
              <span className={classes.logout} onClick={handleLogout}>
                Logout
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
