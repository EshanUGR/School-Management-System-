import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from "../../styles/AnnouncementStyles";

const CheckAnnoucementSection = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );

      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.log("Error fetching teachers:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.prventDefault();
    {
      try {
        const response = await axios.post(
          "http://localhost:40004000/api/v1/announcements/create",
          {
            announcement: announcement,
          }
        );

        console.log("Announcement Sent", response.data);

        setAnnouncement("");
        fetchAnnouncements();
      } catch (error) {
        console.log("Error adding Announcement:", error);
      }
    }
  };

 return (
   <AnnouncementContainer>
     <Sidebar />
     <Content>
       <Title>Announcement</Title>
       <AnnouncementForm onSubmit={handleSubmit}>
         <FormGroup>
           <Label htmlFor="announcement">Announcement:</Label>
           <TextArea
             id="announcement"
             value={announcement}
             onChange={(e) => {
               setAnnouncement(e.target.value);
             }}
             required
             rows={4}
             cols={50}
           />
         </FormGroup>

         <Button type="submit">Send Announcement</Button>
       </AnnouncementForm>
       {/* To display announcement form */}
       <h2>Announcement</h2>

       <AnnouncementList>
         {announcements.map((announcement) => (
           <AnnouncementItem key={announcement}>
             <AnnouncementContent>
               {announcement.announcement}
             </AnnouncementContent>
           </AnnouncementItem>
         ))}
       </AnnouncementList>
     </Content>
   </AnnouncementContainer>
 );
};

export default CheckAnnoucementSection;
