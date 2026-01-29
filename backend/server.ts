import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderboardItem = {
    player: string;
    score: number;
};

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
}); 

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        { player: "Yeison", score: 1000 },
        { player: "Diana", score: -10 },
        { player: "Julian", score: -50 },
    ];

    res.json(summaryData);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});