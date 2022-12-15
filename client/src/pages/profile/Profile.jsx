import "./profile.css"
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              {/* <FacebookTwoToneIcon fontSize="large" /> */}
            </a>
            <a href="http://facebook.com">
              {/* <InstagramIcon fontSize="large" /> */}
            </a>
            <a href="http://facebook.com">
              {/* <TwitterIcon fontSize="large" /> */}
            </a>
            <a href="http://facebook.com">
              {/* <LinkedInIcon fontSize="large" /> */}
            </a>
            <a href="http://facebook.com">
              {/* <PinterestIcon fontSize="large" /> */}
            </a>
          </div>
          <div className="center">
            <span>Salman</span>
            <div className="info">
              <div className="item">
                {/* <PlaceIcon /> */}
                <span>USA</span>
              </div>
              <div className="item">
                {/* <LanguageIcon /> */}
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            {/* <EmailOutlinedIcon /> */}
            {/* <MoreVertIcon /> */}
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile