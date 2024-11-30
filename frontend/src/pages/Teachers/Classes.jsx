import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
ClassContainer,
ClassesContainer,
SidebarContainer,
ClassesContent,
AddClassForm,
AddClassInput,
AddClassButton,
Content,
ClassHeader,
ClassList,
ClassItem


} from "../../styles/ClassesStyles";

const ClassSection= () => {

  const [newClassName, setCNewClassName] = useState("");

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );

      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.log(
          "Error while fetching classes:Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.log("Error fetching announcement:", error);
    }
  };

  const handleAddClass = async (e) => {
    e.prventDefault();

    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/class",
          {
            grade: newClassName,
          }
        );
        console.log("response data:", response.data); //this will log the response data
        setClasses((prevClasses) => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data];
            //we are using the callback function to the state
          } else {
            console.log(
              "Error adding classes:Invalid state for class",
              prevClasses
            );
            return [];
          }
        });

        setCNewClassName("");
      } catch (error) {
        console.log("Error adding classes:", error);
      }
    }
  };


  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter Class Name"
              value={newClassName}
              onChange={(e) => setCNewClassName(e.target.value)}
            />

            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {/* //we are trying to ensure that first the classes is an array before we map here   */}

            {Array.isArray(classes) &&
              classes.map((classItem, index) => {
                <ClassItem key={index}>{classItem.grade}</ClassItem>;
              })}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default ClassSection;
