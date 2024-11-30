import { Exam } from "../models/examSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const addExam = async (req, res, next) => {
  const { name, registrationNumber, className,marks } = req.body;

  try {
    if (!name || !registrationNumber || !className || !marks) {
      handleValidationError("Please Fill all the details ", 400);
    }
    await Exam.create({ name, registrationNumber, className, marks });
    res.status(200).json({
      success: true,
      message: "Exam Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (error) {
    next(error);
  }
};
