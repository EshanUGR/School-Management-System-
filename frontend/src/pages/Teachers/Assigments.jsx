import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
AssignmentsContainer,
Content,
AssignmentsContent,
AssignmentsHeader,
AssignmentList,
AssignmentTitle,
AssignmentButton,
AddAssignmentButton,
AddAssignmentForm,
AddAssignmentInput,
AddAssignmentTextArea

} from "../../styles/AssignmentsStyles";

const AssigmentSection = () => {

  const [newAssigment, setNewAssigment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  const [assigments, setAssigment] = useState([]);

  useEffect(() => {
    fetchAssigment();
  }, []);

  const fetchAssigment = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assigment/getall"
      );

      setAssigment(response.data.assigments);
    } catch (error) {
      console.log("Error fetching assigments:", error);
    }
  };

  const handleAddAssigment = async (e) => {
    e.prventDefault();

    if (
      newAssigment.title.trim() !== "" &&
      newAssigment.description.trim() !== "" &&
      newAssigment.grade.trim() !== "" &&
      newAssigment.deadline.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assigment/create",
          newAssigment
        );

        setAssigment([...assigments, response.data.assigments]);

        setNewAssigment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
        });
      } catch (error) {
        console.log("Error adding assigments:", error);
      }
    }
  };

  return (
    <AssignmentsContainer>
      <Sidebar />

      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assigments</AssignmentsHeader>

          <AddAssignmentForm onSubmit={handleAddAssigment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assigment title"
              value={newAssigment.title}
              onChange={(e) =>
                setNewAssigment({ ...newAssigment, title: e.target.value })
              }
            />

            <AddAssignmentTextArea
              placeholder="Enter assigments description"
              value={newAssigment.description}
              onChange={(e) =>
                setNewAssigment({
                  ...newAssigment,
                  description: e.target.value,
                })
              }
            />

            <AddAssignmentInput
              type="text"
              placeholder="Enter assigment grade"
              value={newAssigment.grade}
              onChange={(e) =>
                setNewAssigment({
                  ...newAssigment,
                  grade: e.target.value,
                })
              }
            />

            <AddAssignmentInput
              type="text"
              placeholder="Enter asssigment deadline"
              value={newAssigment.deadline}
              onChange={(e) =>
                setNewAssigment({
                  ...newAssigment,
                  deadline: e.target.value,
                })
              }
            />

            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>

          <AssignmentList>
            {assigments.map((assigment) => (
              <AssignmentItem key={assigment.id}>
                <strong>{assigment.title}:</strong>
                {assigment.description},{assigment.grade},{assigment.deadline}
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default AssigmentSection;
