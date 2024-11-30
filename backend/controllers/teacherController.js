import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";
export const createTeacher = async (req, res, next) => {
  const { name, email,subject} = req.body;

  try {
    if (!name || !email || !subject) {
      handleValidationError("Please Fill Full Form ", 400);
    }
    await Teacher.create({ name, email, subject });
    res.status(200).json({
      success: true,
      message: "Teacher Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTeachers = async (req, res, next) => {
  try {
    const teacher = await Teacher.find();
    res.status(200).json({
      success: true,
      teacher,
    });
  } catch (error) {
    next(error);
  }
};
