import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.css";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Comments = ({postId}) => {
  const { currentUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["comment"], () =>
    makeRequest.get("/comment?postId" +postId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {isLoading
        ? "Loading....."
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.profilePicture} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">1 hour ago</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
