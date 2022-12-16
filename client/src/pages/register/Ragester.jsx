import "./ragister.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Ragester = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
     name: "",
  });
  const navigate = useNavigate()
  const [error, setError] = useState(null);

  const hanDaleChange =e =>{
    setInput(prev=>({...prev, [e.target.name]:e.target.value}))
  }

const handaleClick = async(e)=>{
  e.preventDefault()
  try {
    await axios.post("http://localhost:5000/api/v1/users/register", input)
    navigate("/login")
  } catch (err) {
    setError(err.response.data)
  }
}

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Facebook</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="username" name="username" onChange={hanDaleChange}/>
            <input type="email" placeholder="email"  name="email" onChange={hanDaleChange}/>
            <input type="name" placeholder="name"  name="name" onChange={hanDaleChange}/>
            <input type="password" placeholder="Password"  name="password" onChange={hanDaleChange}/>
          <p className="erorm">  {error && error}</p>
            <button onClick={handaleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ragester;
