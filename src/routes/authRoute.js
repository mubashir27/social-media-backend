import express from "express";
import { login, register } from "../controller/authCtrl.js";

export const router = express.Router();

//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);
