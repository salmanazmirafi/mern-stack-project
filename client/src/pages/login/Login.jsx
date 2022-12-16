import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const hanDaleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handaleClick = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello User</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={hanDaleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={hanDaleChange}
            />
            <p className="erorm"> {error && error}</p>
            <button onClick={handaleClick}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
