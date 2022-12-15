import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const {darkMode, toggle} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Facebook</span>
        </Link>
        <i className="fa-solid fa-house"></i>
      {darkMode ? <i class="fa-regular fa-sun" onClick={toggle}></i>: <i className="fa fa-moon" onClick={toggle}></i>}
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="search......." />
        </div>
      </div>
      <div className="right">
        <i className="fa-solid fa-user"></i>
        <i className="fa-regular fa-envelope"></i>
        <i className="fa-regular fa-bell"></i>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
