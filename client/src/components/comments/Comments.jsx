import './comments.css'

const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Salman",
      userId: 1,
      profilePicture:
        "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Salman",
      userId: 2,
      profilePicture:
        "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
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
  )
}

export default Comments