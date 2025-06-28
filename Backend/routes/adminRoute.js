import express from "express";
import { addDoctor } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

// Route to add a doctor
adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRouter;
// This code sets up an Express router for admin-related routes.
// It imports the necessary modules and defines a route for adding a doctor.
