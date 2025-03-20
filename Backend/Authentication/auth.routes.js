import express from "express";
import signup from "../components/signup.js";
import logout from "../components/logout.js";
import login from "../components/login.js";
import authenticate from "../middlewares/authenticate.js";
import friendlist from "../components/friendlist.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/findfriends/:id", friendlist);

export default router;
