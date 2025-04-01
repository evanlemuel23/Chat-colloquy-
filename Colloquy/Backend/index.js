import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from"./src/routes/message.route.js";
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config(); // Load environment variables at the start
connectDB();


const app = express();
const PORT = process.env.PORT || 5000; // Use default 5000 if PORT is missing
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http//localhost:5173",
    credentials:true}
))

// Middleware
app.use(express.json()); // Ensure request body parsing
app.use("/api/auth", authRoutes);
app.use("/api/auth/messages", messageRoutes);

// Start the server only if MongoDB connects successfully
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
}).catch(err => {
    console.error("MongoDB connection failed", err);
});
