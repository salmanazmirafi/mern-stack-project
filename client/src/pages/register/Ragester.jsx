import "./ragister.css";
import {Link} from 'react-router-dom'

const Ragester = () => {
  return (
    <div className="login">
    <div className="card">
        <div className="left">
            <h1>Facebook</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
            <span>Don you have an account?</span>
            <Link to="/register">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="name" placeholder="name"/>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Register</button>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Ragester