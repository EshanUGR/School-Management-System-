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

const Announcement = () => {
  const [announcement, setAnnouncement] = useState(""); // Single announcement input
  const [announcements, setAnnouncements] = useState([]); // List of all announcements

  useEffect(() => {
    fetchAnnouncements(); // Fetch all announcements when component mounts
  }, []);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.data); // Adjust to match your API's response structure
    } catch (error) {
      console.log("Error fetching announcements:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    if (!announcement.trim()) {
      alert("Please enter a valid announcement");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/announcements/create",
        { announcement }
      );

      console.log("Announcement Sent:", response.data);

      // Reset the form and refetch announcements
      setAnnouncement("");
      fetchAnnouncements();
    } catch (error) {
      console.log("Error adding announcement:", error);
    }
  };

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        {/* Form to send a new announcement */}
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
              placeholder="Write your announcement here..."
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        {/* Display the list of announcements */}
        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.map((item, index) => (
            <AnnouncementItem key={index}>
              <AnnouncementContent>{item.announcement}</AnnouncementContent>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
