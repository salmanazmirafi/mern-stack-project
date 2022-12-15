import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Facebook</span>
        </Link>
        <i class="fa-solid fa-house"></i>
        <i class="fa fa-moon"></i>
        <div className="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="search......." />
        </div>
      </div>
      <div className="right">
        <i class="fa-solid fa-user"></i>
        <i class="fa-regular fa-envelope"></i>
        <i class="fa-regular fa-bell"></i>
        <div className="user">
          <img
            src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
            alt=""
          />
          <span>Salman</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
