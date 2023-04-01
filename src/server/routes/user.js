import { Router } from "express";
import usercontrols from "../controllers/usercontrols.js";
const { register, login, dashboard } = usercontrols;
const router = Router();
router.post("/register", register);
router.get("/login", login);
router.get("/dashboard/:id", dashboard);
export default router;
