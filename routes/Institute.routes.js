import express from "express";
const router =  express.Router();
import * as InstituteController from "../controller/Institute.controller.js";

// Route to create a new institute
router.post("/create", InstituteController.createInstitute);

//get Institute Details by Institute Id
router.get("/:id", InstituteController.getInstituteById);

export default router;



