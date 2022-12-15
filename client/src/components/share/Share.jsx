import './share.css'

const Share = () => {
  return (
    <div className="share">
    <div className="container">
      <div className="top">
        <img
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          alt=""
        />
        <input type="text" placeholder={`What's on your mind Salman`} />
      </div>
      <hr />
      <div className="bottom">
        <div className="left">
          <input type="file" id="file" style={{display:"none"}} />
          <label htmlFor="file">
            <div className="item">
              <img src={Image} alt="" />
              <span>Add Image</span>
            </div>
          </label>
          <div className="item">
            <img src={Map} alt="" />
            <span>Add Place</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Tag Friends</span>
          </div>
        </div>
        <div className="right">
          <button>Share</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Share