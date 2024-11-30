import express from "express";

import {
  createAssigment,
  getAllAssigments
} from "../controllers/assigmentController.js";

const router = express.Router();

router.get("/getall", getAllAssigments);
router.post("/create",createAssigment);

export default router;
