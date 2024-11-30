import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
ExamContainer,
SidebarContainer,
Content,
ExamHeader,
ExamForm,
FormLabel,
FormInput,
AddButton


} from "../../styles/ExamStyles";

const TCheckExamSection = () => {
    const [examDate, setexamDate] = useState([]);
    const [name, setName] = useState("");
    const [registraionNumber, setRegistrationNumber] = useState("");
    const [className, setClassName] = useState([]);
    const [marks, setMark] = useState("");

    useEffect(() => {
      fetchExam();
    }, []);

    const fetchExam = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/exam/getall"
        );

        if (Array.isArray(response.data.classes)) {
          setexamDate(response.data);
        } else {
          setexamDate([response.data]);
        }
      } catch (error) {
        console.log("Error fetching teachers:", error);
      }
    };

    const handleAddExam = async (e) => {
      e.prventDefault();
      const newExam = {
        name,
        registraionNumber,
        className,
        marks: parseInt(marks),
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/exam/create",
          newExam
        );

        if (typeof response.data === "object") {
          setexamDate([...examDate, response.data]);
          setName("");
          setRegistrationNumber("");
          setClassName("");
          setMark("");
        } else {
          console.error("Error :API response data is not an object");
        }
      } catch (error) {
        console.log("Error adding exam:", error);
      }
    };

    const calculateTotalMarks = () => {
      let total = 0;
      for (let i = 0; i < examData.length; i++) {
        total = examData[i].marks;
      }
    };
  return (
    <ExamContainer>

      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name:</FormLabel>
          <FormInput type='text' required/>

          <FormLabel>Registraion Number:</FormLabel>
          <FormInput type='text' required/>

          <FormLabel>Classes:</FormLabel>
          <FormInput type='text' required/>


          <FormLabel>Marks:</FormLabel>
          <FormInput type='number' required/>

         <AddButton>Add Exam</AddButton>



        </ExamForm>

        <h2>Exam Marks:</h2>
        <h3>Exam Details:</h3>
      </Content>
    </ExamContainer>
  )
};

export default TCheckExamSection;
