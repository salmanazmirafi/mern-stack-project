import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./share.css";

const Share = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
              <i className="fa-solid fa-photo-film"></i>
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
            <i className="fa-solid fa-location-dot"></i>
              <span>Add Place</span>
            </div>
            <div className="item">
            <i className="fa-solid fa-user-tag"></i>
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
