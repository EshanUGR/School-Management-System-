import { Student } from "../models/studentSchema.js";
import {handleValidationError} from "../middleware/errorHandler.js"
export const createStudent=async(req,res,next)=>{
const {name,registrationNumber,grade}=req.body;

try{
  if(!name || !registrationNumber ||!grade)
  {
    handleValidationError("Please Fill Full Form ",400);
  }
  await Student.create({name,registrationNumber,grade});
  res.status(200).json({
    success:true,
    message:'Student Created!'
  })

}
catch(error)
{
next(error);
}


}


export const getAllStudents=async(req,res,next)=>
{
  try{
const student=await Student.find();
req.status(200).json({
  success:true,
  student
})
  }
  catch(error)
  {
    next(error);
  }
}