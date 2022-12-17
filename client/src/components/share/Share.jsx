import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import "./share.css";


const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
   formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data
    } catch (error) {
      console.log(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/post", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["post"]);
      },
    }
  );

  const sharePost = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, image: imgUrl });
    setDesc("");
    setFile(null);
  };


  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={ currentUser.profile} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src="https://img.icons8.com/3d-fluency/2x/picture.png" alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="https://img.icons8.com/ios-filled/2x/point-objects.png" alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="https://img.icons8.com/ios-glyphs/2x/tags.png" alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={sharePost}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
