import mongoose from "mongoose";
import validator from "validator";

const assigmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,

  },
  grade: {
    type: String,
    required: true,
  },
  deadline:{
    type:Date,
    required:true
  }
});

export const Assigment = mongoose.model("Assigment", assigmentSchema);
