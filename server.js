import express from "express";
import InstituteRoutes from "./routes/Institute.routes.js";
import MongoDBConnection from "./config/db.config.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

MongoDBConnection();

app.use(cors());
app.use(express.json());

//use Institute routes
app.use("/api/institute", InstituteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});