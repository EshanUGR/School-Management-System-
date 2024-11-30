import express from "express";

import { createBook, getAllBooks } from "../controllers/LibraryController.js";

const router = express.Router();

router.get("/getall", getAllBooks);
router.post("/create", createBook);

export default router;
