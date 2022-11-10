import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  var upload = async (img) => {
    let responce = await fetch(
      "https://instaclone-server-vignesh.herokuapp.com/image_upload",
      {
        method: "POST",
        body: JSON.stringify({ data: img }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    document.getElementById("img").value = responce.url;
    setStatus("");
  };
  function handleFile(e) {
    const f = e.target.files[0];
    setStatus("Uploading Image ...");
    readFile(f);
  }
  function readFile(f) {
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onloadend = () => {
      upload(reader.result);
    };
  }
  var handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(document.getElementById("form"));
    let obj = {};
    for (const [key, value] of formData) {
      if (key !== "upload") {
        obj[key] = value;
      }
    }
    await fetch("https://instaclone-server-vignesh.herokuapp.com/instaclone", {
      method: "POST",
      body: JSON.stringify({ ...obj }),
      headers: { "Content-type": "application/json" },
    });
    navigate("/instaclone");
  };
  //https://instaclone-backend-vicky.herokuapp.com/ deployed to Heroku
  return (
    <>
      <div className="post-form">
        <form id="form" onSubmit={handleSubmit}>
          <input
            className="file"
            type="file"
            name="upload"
            placeholder="No file chosen"
            onChange={handleFile}
            required
          />
          <p>{status}</p>
          <br />
          <input
            className="author"
            type="text"
            name="name"
            placeholder="Author"
            required
          />
          <input
            className="author"
            type="text"
            name="location"
            placeholder="Location"
            required
          />
          <br />
          <input
            className="des"
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input type="text" name="image" id="img" className="des" />
          <br />
          <button type="btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
