import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
} from "../controller/userCtrl.js";

export const router = express.Router();

//update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

//get a user
router.get("/:id", getUser);

//follow a user

router.put("/:id/follow", followUser);

//unFollow a user

router.put("/:id/unfollow", unFollowUser);
