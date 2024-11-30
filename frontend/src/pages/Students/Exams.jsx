import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
// import EventCalandar from "./EventCalander";
// import Announcement from "./Announcement";

// import Performance from "./Performance";
import axios from "axios";
import {Bar} from 'react-chartjs-2';
import {
 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer
  


} from "../../styles/ExamStyles";
import { scales } from "chart.js";
const ExamStudent = () => {

  const chartRef=useRef(null);

  const examResultData=
  {
subjects:['Math','sience','english','history'],
result:[80,78,45,78]
  };

  //bar chart data

  const barChartData = {
    labels: examResultData.subjects,
    datasets: [
      {
        label: "Exam Resulst",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: "1",

        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultData.result,
      },
    ],
  };

  const chartOptions={
    scales:{
      y:{
       
        beginAtZero:true,
        max:100
      }
    }
  }
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultData.subjects.map((subject, index) => {
            return(
 <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score:{examResultData.result[index]}%</ExamResult>
            </div>
            )
           
          })}

          <ExamChartContainer>
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamStudent;
