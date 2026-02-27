import { Router } from "express";
import pool from "../db/mysql";

const router = Router();

type LeaderboardRow = {
    id: number;
    player: string;
    score: number;
};

// GET /api/leaderboard
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query<LeaderboardRow[]>(
            "SELECT id, player_name, score FROM leaderboard ORDER BY score DESC"
        );

        res.json(rows);
    } catch (error) {
        console.error("Error GET /api/leaderboard:", error);
        res.status(500).json({ message: "MySQL error fetching leaderboard" });
    }
});

export default router;