import "./profile.css"
import Posts from '../../components/posts/Posts'
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="profile">
      <div className="images">
        <img
          src={currentUser.coverpic}
          alt=""
          className="cover"
        />
        <img
          src={currentUser.profile}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
            <i className="ficon fa-brands fa-facebook" ></i>
            
            </a>
            <a href="http://facebook.com">
            <i className="ficon fa-brands fa-instagram"></i>
              
            </a>
            <a href="http://facebook.com">
            <i className="ficon fa-brands fa-twitter"></i>
             
            </a>
            <a href="http://facebook.com">
            <i className="ficon fa-brands fa-linkedin"></i>
             
            </a>
            <a href="http://facebook.com">
            <i className="ficon fa-brands fa-pinterest"></i>
             
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
              <i className="ficon fa-solid fa-location-dot"></i>
                <span>USA</span>
              </div>
              <div className="item">
              <i className="ficon fa-solid fa-language"></i>
                <span>English</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
          <i className="ficon fa-regular fa-envelope"></i>
          <i className="ficon fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile