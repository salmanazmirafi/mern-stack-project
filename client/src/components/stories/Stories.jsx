import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.css'

const Stories = () => {
  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://cdn.pixabay.com/photo/2018/01/04/19/43/love-3061483__340.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792__340.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://cdn.pixabay.com/photo/2018/11/06/14/01/couple-3798371__340.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600__340.jpg",
    },
  ];


  return (
    <div className="stories">
    <div className="story">
        <img src={currentUser.profile} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
    {stories.map(story=>(
      <div className="story" key={story.id}>
        <img src={story.img} alt="" />
        <span>{story.name}</span>
      </div>
    ))}
  </div>
  )
}

export default Stories