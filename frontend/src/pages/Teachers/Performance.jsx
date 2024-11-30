import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";

const CheckPerformanceSection = () => {
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudent: 100,
  };

  ///sample data for individual student performance

  const IndividualPerformanceData = [
    {
      id: 1,
      name: "John Doe",
      score: 90,
    },
    {
      id: 2,
      name: "John Doe",
      score: 59,
    },
    {
      id: 1,
      name: "John Doe",
      score: 49,
    },
  ];
  return (
    <PerformanceContainer>
      <Sidebar />

      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>

          <SchoolPerformance>
            <p>Average Score:{schoolPerformanceData.averageScore}</p>
            <p>Total Studnt:{schoolPerformanceData.totalStudent}</p>
          </SchoolPerformance>

          <PerformanceHeader>Individual Performance</PerformanceHeader>

          <IndividualPerformance>
            {IndividualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}:{student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );


};

export default CheckPerformanceSection;
