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
      img: "https://cdn.pixabay.com/photo/2019/02/22/10/26/swan-4013225__340.jpg",
    },
    {
      id: 2,
      name: "Salman",
      userId: 2,
      profilePic:
        "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501__340.jpg",
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
