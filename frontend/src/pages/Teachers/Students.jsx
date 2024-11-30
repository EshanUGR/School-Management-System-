import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
StudentsContainer,
Content,
StudentsContent,
StudentsHeader,
StudentList,
StudentItem,
AddStudentButton,
AddStudentForm,
AddStudentInput


} from "../../styles/StudentStyles";

const StudentSection = () => {
  
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/student/getall"
      );

      setStudent(response.data.student);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.prventDefault();

    if (
      newStudent.name.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/student/create",
          newStudent
        );
        console.log("response data:", response.data); //this will log the response data
        setStudent([...student, response.data.student]);
        setNewStudent({
          name: "",
          registrationNumber: "",
          grade: "",
        });
      } catch (error) {
        console.log("Error adding student:", error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm onSubmit={handleAddStudent}>
              <AddStudentInput
                type="text"
                placeholder="Enter Student Name"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />

              <AddStudentInput
                type="text"
                placeholder="Enter Registeration Number"
                value={newStudent.registrationNumber}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    registrationNumber: e.target.value,
                  })
                }
              />
              <AddStudentInput
                type="text"
                placeholder="Enter Grade"
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
              />

              <AddStudentButton type="submit">
                {student.map((student) => (
                  <StudentItem key={student.id}>
                    {student.name}-{student.registrationNumber}-{student.grade}
                  </StudentItem>
                ))}
              </AddStudentButton>
            </AddStudentForm>
            <StudentList></StudentList>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default StudentSection;
