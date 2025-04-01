import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { updateProfile } from "../controllers/auth.controller.js"; // ✅ Ensure this import is present

const router = express.Router();

router.put("/update-profile", protectRoute, updateProfile); // ✅ Now properly defined

export default router;
