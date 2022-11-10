const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Post = require("./models/post");
const cors = require("cors");
const { cloudinary } = require("./utils/cloudinary");
const Port = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://instaclone:insta@test.vrl4wrj.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/image_upload", async (req, res) => {
  try {
    const img = req.body.data;
    const uploadResponce = await cloudinary.uploader.upload(img, {
      upload_preset: "ml_default",
    });
    res.json({ url: uploadResponce.url });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/instaclone", async (req, res) => {
  try {
    const instaPost = await Post.find();
    res.json({ res: instaPost });
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/instaclone", async (req, res) => {
  try {
    const date = new Date().getDate();
    const month = parseInt(new Date().getMonth()) + 1;
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const postedAt = `${date}-${month}-${year}(${hour}:${minutes})`;
    const post = { ...req.body, date: postedAt, like: "30" };
    if (req.body.image) {
      await Post.create(post);
    }
    res.send("");
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(Port, () => console.log(`Server running at ${Port}`));
