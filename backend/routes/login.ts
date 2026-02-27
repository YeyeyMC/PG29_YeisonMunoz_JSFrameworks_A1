import { Router } from "express";
import { User } from "../models/User";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const username = typeof req.query.username === "string" ? req.query.username.trim() : "";
        const password = typeof req.query.password === "string" ? req.query.password : "";

        if (!username) {
            return res.status(400).json({ message: "username is required" });
        }

        let user = await User.findOne({ username });

        if (password && user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.json({
            username: user.username,
        });
    } catch (err) {
        console.error("Error GET /api/login:", err);
        return res.status(500).json({ message: "Mongo error in login" });
    }
});

export default router;