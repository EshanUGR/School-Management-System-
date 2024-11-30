import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherButton,
  AddTeacherForm,
  AddTeacherInput,
} from "../../styles/TeachersStyles";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeachers] = useState([]); // Ensure proper plural naming for consistency

  useEffect(() => {
    fetchTeachers(); // Correct function name
  }, []);

  const fetchTeachers = async () => {
    try {
      // /api/v1/teachers
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );

      // Ensure the response structure matches your backend
      const fetchedTeachers = response.data?.teachers || [];
      setTeachers(fetchedTeachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setTeachers([]); // Fallback to an empty array if there's an error
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault(); // Fix the typo `prventDefault` -> `preventDefault`

    if (
      newTeacher.name.trim() &&
      newTeacher.email.trim() &&
      newTeacher.subject.trim()
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/teachers/create",
          newTeacher
        );

        const createdTeacher = response.data.teacher; // Adjust based on API response
        setTeachers((prevTeachers) => [...prevTeachers, createdTeacher]); // Use functional state update

        setNewTeacher({
          name: "",
          email: "",
          subject: "",
        });
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <TeachersContainer>
      <Sidebar />
      <Content>
        <TeachersContent>
          <TeachersHeader>
            {/* Form to add a teacher */}
            <AddTeacherForm onSubmit={handleAddTeacher}>
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Name"
                value={newTeacher.name}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, name: e.target.value })
                }
              />
              <AddTeacherInput
                type="email"
                placeholder="Enter Teacher Email"
                value={newTeacher.email}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, email: e.target.value })
                }
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Subject"
                value={newTeacher.subject}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, subject: e.target.value })
                }
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>

            {/* List of teachers */}
            <TeacherList>
              {teachers.length > 0 ? (
                teachers.map((teacher, index) => (
                  <TeacherItem key={index}>
                    {teacher.name} - {teacher.email} - {teacher.subject}
                  </TeacherItem>
                ))
              ) : (
                <p>No teachers found.</p>
              )}
            </TeacherList>
          </TeachersHeader>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
