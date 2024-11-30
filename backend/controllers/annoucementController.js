import { Annoucnement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const createAnnouncement = async (req, res, next) => {
  const { annoucement } = req.body;

  try {
    if (!annoucement) {
      handleValidationError("Please Fill Full Form ", 400);
    }
    await Announcement.create({ annoucement });
    res.status(200).json({
      success: true,
      message: "Announcement Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Annoucnement.find();
    res.status(200).json({
      success: true,
      announcement,
    });
  } catch (error) {
    next(error);
  }
};
