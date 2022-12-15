import "./share.css";

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
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img
                  src="https://thenounproject.com/api/private/icons/1570202/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjmu520oBjBLZs-8yxFnIvmoPhXhIeqYvH1lAZjY1RCVSZEFHkWSx9eri7v6rXTo5y9CDgKVTeGJ7pSfhRNvuMcTLtAg%3D%3D"
                  alt=""
                />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img
                src="https://thenounproject.com/api/private/icons/3705663/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjmu520oBjBLZs-8yxFnIvmoPhXhIeqYvH1lAZjY1RCVSZEFHkWSx9eri7v6rXTo5y9CDgKVTeGJ7pSfhRNvuMcTLtAg%3D%3D"
                alt=""
              />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img
                src="https://thenounproject.com/api/private/icons/2977047/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjmu520oBjBLZs-8yxFnIvmoPhXhIeqYvH1lAZjY1RCVSZEFHkWSx9eri7v6rXTo5y9CDgKVTeGJ7pSfhRNvuMcTLtAg%3D%3D"
                alt=""
              />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
