import React, { useState,useEffect } from "react";
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

} from '../../styles/ExamStyles'

const Exam = () => {


  const [examDate, setexamDate] = useState([]);
  const [name,setName] = useState('');
  const [registraionNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState([]);
  const[marks,setMark]=useState('');

  useEffect(() => {
    fetchExam();
  }, []);

  const fetchExam = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/exam/getall"
      );

if(Array.isArray(response.data.classes))
{
setexamDate(response.data);
}else{
 setexamDate([response.data]);
}

      
    } catch (error) {
      console.log("Error fetching teachers:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.prventDefault();
    const newExam={name,registraionNumber,className,marks:parseInt(marks)}

    
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/exam/create",
          newExam
        );


        if(typeof response.data==='object')
        {
setexamDate([...examDate,response.data]);
setName('');
setRegistrationNumber('');
setClassName('');
setMark('');
        }
        else{
          console.error('Error :API response data is not an object')
        }
        
      } catch (error) {
        console.log("Error adding exam:", error);
      }
    
  };

  const calculateTotalMarks=()=>
  {

    let total=0;
    for(let i=0;i<examData.length;i++)
    {
      total=examData[i].marks;
    }
  }
  return (
    <ExamContainer>
<SidebarContainer>

  <Sidebar/>

</SidebarContainer>
<Content>

  <ExamHeader>Exam Details</ExamHeader>
  <ExamForm>
<FormLabel>Name :</FormLabel>
<FormInput
type='text'
required
/>
<FormLabel>Registration Number :</FormLabel>
<FormInput
type='text'
required
/>
<FormLabel>Class:</FormLabel>
<FormInput
type='text'
required
/>
<FormLabel>Marks:</FormLabel>
<FormInput
type='number'
required
/>
<AddButton type='submit'>Add Exam</AddButton>
  </ExamForm>

  <h2>Total Marks:{calculateTotalMarks}</h2>
  <h3>Exam Details:</h3>

  <ul>


  </ul>
</Content>


    </ExamContainer>
  )
};

export default Exam;
