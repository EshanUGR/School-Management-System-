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
AddTeacherInput

} from "../../styles/TeachersStyles";

const TeacherSection = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );

      setTeacher(response.data.teachers);
    } catch (error) {
      console.log("Error fetching teachers:", error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.prventDefault();

    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.subject.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assigment",
          newTeacher
        );
        const createdTeacher = response.data.teachers;

        setTeacher([...teachers, createdTeacher]);

        setNewTeacher({
          name: "",
          email: "",
          subject: "",
        });
      } catch (error) {
        console.log("Error adding teacher:", error);
      }
    }
  };
  return (
    <TeachersContainer>
      <Sidebar />

      <Content>
        <TeachersContent>
          <TeachersHeader>
            <AddTeacherForm onSubmit={handleAddTeacher}>
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Name"
                value={newTeacher.name}
                onChange={
                  ((e) => setNewTeacher({ ...newTeacher, name: e.target.value }))
                }
              />
              <AddTeacherInput
                type="email"
                placeholder="Enter Teacher email"
                value={newTeacher.email}
                onChange={
                  ((e) => setNewTeacher({ ...newTeacher, email: e.target.value }))
                }
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Subject"
                value={newTeacher.subject}
                onChange={
                  ((e) => setNewTeacher({
                    ...newTeacher,
                    subject: e.target.value,
                  }))
                }
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>

            <TeacherList>
              {teachers.map((teacher) => (
                <TeacherItem key={teacher.id}>
                  {teacher.name}-{teacher.email}-{teacher.subject}
                </TeacherItem>
              ))}
            </TeacherList>
          </TeachersHeader>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default TeacherSection;
