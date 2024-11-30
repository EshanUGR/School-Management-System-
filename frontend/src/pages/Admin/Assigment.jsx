import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentButton,
  AddAssignmentTextArea,
} from "../../styles/AssignmentsStyles";

const Assigments = () => {
  const [newAssigment, setNewAssigment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });

  // Initialize assigments with an empty array
  const [assigments, setAssigment] = useState([]);

  useEffect(() => {
    fetchAssigment();
  }, []);

  const fetchAssigment = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assigment/getall"
      );

      // Check if response data has assigments before setting state
      if (response.data && response.data.assigments) {
        setAssigment(response.data.assigments);
      } else {
        setAssigment([]);
      }
    } catch (error) {
      console.log("Error fetching assigments:", error);
    }
  };

  const handleAddAssigment = async (e) => {
    e.preventDefault();

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

        // Add the newly created assigment to the state
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
              placeholder="Enter assigment deadline"
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
            {/* Ensure assigments is always an array */}
            {assigments && assigments.length > 0 ? (
              assigments.map((assigment) => (
                <AssignmentItem key={assigment.id}>
                  <strong>{assigment.title}:</strong>
                  {assigment.description}, {assigment.grade},{" "}
                  {assigment.deadline}
                </AssignmentItem>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assigments;
