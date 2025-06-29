import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

// Route to add a doctor
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
export default adminRouter;
// This code sets up an Express router for admin-related routes.
// It imports the necessary modules and defines a route for adding a doctor.
