const express = require("express");
const Post = require("../models/postModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const newPost = new Post({ title, content, authorId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
