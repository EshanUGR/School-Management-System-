import mongoose from "mongoose";
import validator from "validator";

const LibrarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    unique:true
  },
});

export const Book = mongoose.model("library", LibrarySchema);
