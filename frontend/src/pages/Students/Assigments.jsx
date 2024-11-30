import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentButton,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentDoneMessage,
} from "../../styles/AssignmentsStyles";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assigment/getall"
      );
      if (response.data && Array.isArray(response.data.assigments)) {
        setAssignments(response.data.assigments);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching assignments:", error.message || error);
    }
  };

  const handleDoAssignment = (id) => {
    console.log(`Mark assignment ${id} as done.`);
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {Array.isArray(assignments) && assignments.length > 0 ? (
          assignments.map((assignment) => (
            <AssignmentCard key={assignment.id}>
              <AssignmentTitle>{assignment.title}</AssignmentTitle>
              <AssignmentDescription>
                {assignment.description}
              </AssignmentDescription>
              {!assignment.done ? (
                <AssignmentForm
                  onDoAssignment={() => handleDoAssignment(assignment.id)}
                />
              ) : (
                <AssignmentDoneMessage>
                  Assignment is Done
                </AssignmentDoneMessage>
              )}
            </AssignmentCard>
          ))
        ) : (
          <p>No assignments available.</p>
        )}
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState("");

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      onDoAssignment();
    } else {
      alert("Please provide your opinion/Assignment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
      />
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  );
};

export default StudentAssignments;
