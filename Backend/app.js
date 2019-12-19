const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  //Setting headers for access-control and it's methods
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//Getting posts
app.get("/posts", (req, res, next) => {
  const posts = [
    {
      id: "hgdvjhav2",
      title: "This is a Title",
      post: "This is First post"
    },
    {
      id: "iiahb7",
      title: "This is another Title",
      post: "This is Second post"
    }
  ];
  res.status(200).json({ posts });
});

//Adding new posts
app.post("/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.json({
    message: "Post Added Successfully",
    post: post
  });
});
module.exports = app;
