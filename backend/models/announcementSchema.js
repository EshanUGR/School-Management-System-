import mongoose from "mongoose";
import validator from "validator";

const announcementSchema = new mongoose.Schema({
  annoucement: {
    type: String,
    required: true,
  }
});

export const Annoucnement = mongoose.model("Announcement", announcementSchema);
