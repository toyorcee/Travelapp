import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import airplane from "../../assets/airplane-fly.jpg";
import classes from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import nav_dropdown from "../../assets/dropdown.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle(classes.navmenuvisible);
    e.target.classList.toggle(classes.rotate);
  };

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
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={airplane} alt="" className={classes.fly} />
            <h2 className="ml-3 text-xl">Traveller</h2>
          </Link>
        </div>
        <img
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt=""
          className={classes.navdropdown}
        />
        <ul ref={menuRef} className={classes.navmenu}>
          <li>
            <Link to="/" className="mr-5 hover:text-[#ee9d06] cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="mr-5 hover:text-[#ee9d06] cursor-pointer"
              href="#suggested"
            >
              Suggested
            </Link>
          </li>
        </ul>
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
