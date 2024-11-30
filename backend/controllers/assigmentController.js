import { Assigment } from "../models/assigmentSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";


export const createAssigment = async (req, res, next) => {
  const {title,description,grade,deadline} = req.body;

  try {
    if (!title || !description || !grade || !deadline) {
      handleValidationError("Please fill the form", 400);
    }
await Assigment.create({ title, description, grade, deadline });
    

    res.status(200).json({
    success:true,
    message:"Assigment is Created",
    
    });
   
  } catch (error) {
    next(error);
  }
};

export const getAllAssigments = async (req, res, next) => {
  try {
    const assigment = await Assigment.find();

    res.status(200).json({
      success: true,
      assigment,
    });
  } catch (error) {
    next(error);
  }
};
