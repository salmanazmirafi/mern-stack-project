import React, { useState } from 'react'
import { Link } from "react-router-dom";
import moment from 'moment'
import Comments from '../comments/Comments';
import './post.css'

const Post = ({post}) => {
  const [commentOpen, setCommentOpen] = useState(false);


  //TEMPORARY
  const liked = false;
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
          <img src={"/upload/"+ post.image} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
           <i className="fa-solid fa-comment"></i>
            12 Comments
          </div>
          <div className="item">
          <i className="fa-solid fa-share"></i>
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id}/>}
      </div>
    </div>
  )
}

export default Post