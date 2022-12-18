import "./profile.css";
import Posts from "../../components/posts/Posts";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";


const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/user/find/" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="profile">
      {isLoading ? "Loading....." :
        <>
        <div className="images">
        <img src={data.coverpic} alt="" className="cover" />
        <img src={data.profile} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <i className="ficon fa-brands fa-facebook"></i>
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
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <i className="ficon fa-solid fa-location-dot"></i>
                <span>{data.city}</span>
              </div>
              <div className="item">
                {data.id === 5 ? (
                  <span>500M Follower</span>
                ) : (
                  <>
                    <i className="ficon fa-solid fa-language"></i>
                    <span>{data.website}</span>
                  </>
                )}
              </div>
            </div>
          {userId ===currentUser.id ?(<button>Update</button>): <button>follow</button>}
          </div>
          <div className="right">
            <i className="ficon fa-regular fa-envelope"></i>
            <i className="ficon fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
        </>
      }
    </div>
  );
};

export default Profile;
