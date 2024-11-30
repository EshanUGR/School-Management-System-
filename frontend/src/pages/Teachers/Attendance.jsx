import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
} from "../../styles/AttendanceStyles";
import { Student } from "../../../../backend/models/studentSchema";

const CheckAttendanceSection = () => {

  
  const [students, setStudents] = useState([]);
  const [attendanceData, setattendanceData] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);
  //we are fetching students bcs we are to mark attendance based on  the student in our system
  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );

      setStudents(response.data.students);
      initializeAttendance(response.data.students);
    } catch (error) {
      console.log("Error fetching attendance:", error);
    }
  };

  const initializeAttendance = (students) => {
    const initialiiAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: "Present", //here default is present
    }));
    setattendanceData(initialiiAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updateData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });

    setattendanceData(initializeAttendance);
  };

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status,
      }));

      const response = await axios.post(
        "http://localhost:4000/api/v1/attendance/create",
        {
          attendanceData: formattedData,
        }
      );
    } catch (error) {
      console.error("Error submitting attendance data", error);
    }
  };




  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>

          <AttendanceList>
            {students.map((student, index) => (
              <React.Fragment key={student.id}>
                <AttendanceItem>
                  <StudentName>{student.name}</StudentName>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={attendanceData[index]?.status === "Present"}
                      onChange={() => handleStatusChange(student.id, "Present")}
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={attendanceData[index]?.status === "Absent"}
                      onChange={() => handleStatusChange(student.id, "Absent")}
                    />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={
                        attendanceData[index]?.status === "Absent with Apology"
                      }
                      onChange={() =>
                        handleStatusChange(student.id, "Absent with Apology")
                      }
                    />
                    Absent with apology
                  </CheckboxLabel>
                </AttendanceItem>
                {index !== student.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </AttendanceList>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );

};

export default CheckAttendanceSection;
