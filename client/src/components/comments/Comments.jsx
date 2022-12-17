import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from 'moment'
import { useState } from "react";

const Comments = ({postId}) => {
  const [desc,setDesc] = useState("")
  const { currentUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["comment"], () =>
    makeRequest.get("/comment?postId=" + postId).then((res) => {
      return res.data;
    })
  );

// Add Comment Q
const queryClient = useQueryClient();

const mutation = useMutation(
  (newComment) => {
    return makeRequest.post("/comment", newComment);
  },
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["comment"]);
    },
  }
);

const sharePost = async (e) => {
  e.preventDefault();
  mutation.mutate({ desc, postId });
  setDesc("");

};



  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile} alt="" />
        <input type="text" placeholder="write a comment" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
        <button onClick={sharePost}>Send</button>
      </div>
      {error ? "Something Web Wrong" : isLoading
        ? "Loading....."
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.profile} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
