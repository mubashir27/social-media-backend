import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimeLine,
  reactPost,
  updatePost,
} from "../controller/postCtrl.js";

export const router = express.Router();

//create a post

router.post("/", createPost);
//update a post

router.put("/:id", updatePost);
//delete a post

router.delete("/:id", deletePost);
//like / dislike a post

router.put("/:id/like", reactPost);
//get a post

router.get("/:id", getPost);

//get timeline posts

router.get("/timeline/all", getTimeLine);

module.exports = router;
