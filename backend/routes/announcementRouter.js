import express from "express";

import {
  createAnnouncement,
  getAllAnnouncement,
} from "../controllers/annoucementController.js";

const router = express.Router();

router.get("/getall", getAllAnnouncement);
router.post("/create", createAnnouncement);

export default router;
