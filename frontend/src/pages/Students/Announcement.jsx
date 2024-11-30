import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
// import EventCalandar from "./EventCalander";
// import Announcement from "./Announcement";

// import Performance from "./Performance";
import axios from "axios";

import {
  AnnouncementContainer,
  SidebarContainer,
  Content,
  AnnouncementHeader,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementTitle,
  AnnouncementContent



} from "../../styles/AnnouncementStyles";
const AnnouncemntSection= () => {


  
  
  const [announcements,setAnnouncements]=useState([]);

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

  
    
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcement</AnnouncementHeader>

        {/* here we will need to map through the announcemnt coming for databas */}
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementTitle>
                {announcement.announcement}
              </AnnouncementTitle>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default AnnouncemntSection;
