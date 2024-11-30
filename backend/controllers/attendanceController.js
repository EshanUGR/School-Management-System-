
import { handleValidationError } from "../middleware/errorHandler.js";
import { Attendance } from "../models/attendanceSchema.js";
export const markAttendance = async (req, res, next) => {
  const { attendanceDate } = req.body;

  try {
    if (
      !attendanceDate ||
      !Array.isArray(attendanceDate) ||
      attendanceDate.length === 0
    ) {
      handleValidationError("Attendance date is missing or invalid", 400);
    }
    const attendanceRecords = await Promise.all(
      attendanceDate.map(async (record) => {
        const { Student, status } = record;
        return await Attendance.create({ Student, status });
      })
    );

    res.status(200).json({
      success: true,
      message: "Attendance Marked Successfully",
      attendanceRecords,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAttendance = async (req, res, next) => {
  try {
    const attendanceRecords = await Attendance.find().populate(
      "student",
      "name registrationNumber grade"
    );
    res.status(200).json({
      success: true,
      
      attendanceRecords,
    });
  } catch (error) {
    next(error);
  }
};
