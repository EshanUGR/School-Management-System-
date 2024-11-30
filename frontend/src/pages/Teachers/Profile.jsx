import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
  ProfileContainer,
  Content,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  ProfileHeader,
  EditButton,
} from "../../styles/SettingsProfileStyles";
import { SidebarContainer } from "../../styles/PerformanceStyles";

const TeacherProfileSection = () => {
 

  const teacherInfo = {
    name: "John Doe",
    email: "doea@gmai.com",
    phone: "111111",
    address: "Mumbai, India",
    qualification: "Master in Education",
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>

          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Phone:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>

          <ProfileLabel>Address:</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>

          <ProfileLabel>Qualification:</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>

        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  );
};

export default TeacherProfileSection;