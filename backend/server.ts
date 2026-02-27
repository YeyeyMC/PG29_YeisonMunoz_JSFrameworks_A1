import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import leaderboardRouter from "./routes/leaderboard";
import { connectMongo } from "./db/mongo";
import loginRouter from "./routes/login";
import contactRouter from "./routes/contact";

dotenv.config();

type LeaderboardItem = {
    player: string;
    score: number;
};

const app = express();
const PORT = process.env.PORT;

// app uses the router for the endpoints
app.use(cors());
app.use(express.json());
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/login", loginRouter);
app.use("/api/contact", contactRouter);

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
}); 

// this get is no longer used
app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        { player: "Yeison", score: 1000 },
        { player: "Diana", score: -10 },
        { player: "Julian", score: -50 },
    ];

    res.json(summaryData);
});

connectMongo().catch((err) => {
    console.error("Mongo connection error:", err);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});