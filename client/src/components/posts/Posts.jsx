import "./post.css";
import Post from "../post/Post";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../axios";

const Posts = () => {
  //TEMPORARY
  const { isLoading, error, data } = useQuery(["post"], () =>
    makeRequest.get("/post").then((res) => {
      return res.data;
    })
  );
  return (
    <div className="posts">
      {error ? "Something Web Wrong" : (isLoading ? "Lodding........" : data.map((post) => (
        <Post post={post} key={post.id} />
      )))}
    </div>
  );
};

export default Posts;
