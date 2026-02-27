import { Router } from "express";
import { Contact } from "../models/Contact";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body ?? {};

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "name, email, and message are required",
            });
        }

        const saved = await Contact.create({ name, email, message });

        return res.status(201).json({
            message: "Contact saved",
            id: saved._id,
        });
    } catch (err) {
        console.error("Error POST", err);
        return res.status(500).json({ message: "Mongo error saving contact" });
    }
});

export default router;