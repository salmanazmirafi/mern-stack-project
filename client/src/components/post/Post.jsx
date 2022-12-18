import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Comments from "../comments/Comments";
import "./post.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const { isLoading, data } = useQuery(["like", post.id], () =>
  makeRequest.get("/like?postId=" + post.id).then((res) => {
    return res.data;
  })
);

console.log(post);

const queryClient = useQueryClient();

const mutation = useMutation(
  (liked) => {
    if (liked) return makeRequest.delete("/like?postId=" + post.id);
    return makeRequest.post("/like", { postId: post.id });
  },
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["likes"]);
    },
  }
);
// const deleteMutation = useMutation(
//   (postId) => {
//     return makeRequest.delete("/posts/" + postId);
//   },
//   {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries(["posts"]);
//     },
//   }
// );

const handleLike = () => {
  mutation.mutate(data.includes(currentUser.id));
};

// const handleDelete = () => {
//   deleteMutation.mutate(post.id);
// };
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profile} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"/upload/" + post.image} alt="" />
        </div>
        <div className="info">
          <div className="item">
          {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              
              <i className="fa-solid fa-heart"
                style={{ color: "red" }}
                onClick={handleLike}
              ></i>
            ) : (
              <i className="fa-regular fa-heart" onClick={handleLike} ></i>
            )}
            {data?.length} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)} >
            <i className="fa-solid fa-comment" onClick={handleLike}></i>
            See Comments
          </div>
          <div className="item">
            <i className="fa-solid fa-share"></i>
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
