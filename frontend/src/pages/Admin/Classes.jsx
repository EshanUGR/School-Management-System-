import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import axios from 'axios'
import {
ClassesContainer,
Content,
ClassesContent,
ClassHeader,
ClassList,
ClassItem,
AddClassButton,
AddClassForm,
AddClassInput

} from '../../styles/ClassesStyles'

const Classes = () => {

const[newClassName,setCNewClassName]=useState('');

const[classes,setClasses]=useState([]);
useEffect(()=>
{
fetchClasses();
},[]);



const fetchClasses = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/v1/class/getall");
    // Your logic here
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with an error
      console.log("Error response:", error.response.data);
      console.log("Error status:", error.response.status);
      console.log("Error headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Error request:", error.request);
    } else {
      // Something happened in setting up the request
      console.log("Error message:", error.message);
    }
  }
};

const handleAddClass=async(e)=>
{
  e.preventDefault();

  if(newClassName.trim()!=='')
  {
   try{
const response = await axios.post("http://localhost:4000/api/v1/class/create",{
  grade:newClassName
});
console.log('response data:',response.data); //this will log the response data
setClasses(prevClasses=>{


if( Array.isArray(prevClasses)) 
   {
 return [...prevClasses,response.data];
 //we are using the callback function to the state

   }
   else{
    console.log("Error adding classes:Invalid state for class", prevClasses);
    return [];
   }

  

});

setCNewClassName('');
  }
  catch(error)
  {
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
              classes.map((classItem, index) => (
                <ClassItem key={index}>{classItem.grade}</ClassItem>
              ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
}

export default Classes
