
import express from "express";

import { createEvents, getAllEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.get("/getall", getAllEvents);
router.post("/create", createEvents);

export default router;




