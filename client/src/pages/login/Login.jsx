import "./login.css";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext)

  const handaleClick=()=>{
    login()
  }
  return <div className="login">
    <div className="card">
        <div className="left">
            <h1>Hello User</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button onClick={handaleClick}>Login</button>
            </form>
        </div>
    </div>
  </div>;
};

export default Login;
