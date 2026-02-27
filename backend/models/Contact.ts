import mongoose from "mongoose";

// model creation for contact information
const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);