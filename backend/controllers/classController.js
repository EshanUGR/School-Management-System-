import { Class } from "../models/classSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";


export const createClass = async (req, res, next) => {
  const {  grade } = req.body;

  try {
    if (!grade) {
      handleValidationError("Please Fill  Form ", 400);
    }
    await Class.create({ grade });
    res.status(200).json({
      success: true,
      message: "Class is Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllClasses = async (req, res, next) => {
  try {
    const classe = await Class.find();
    re.status(200).json({
      success: true,
      classe,
    });
  } catch (error) {
    next(error);
  }
};
