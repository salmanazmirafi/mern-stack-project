import "./post.css";
import Post from "../post/Post";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Salman",
      userId: 1,
      profilePic:
        "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Salman",
      userId: 2,
      profilePic:
        "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
