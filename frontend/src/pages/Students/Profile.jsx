import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";

import {
ProfileContainer,SidebarContainer,
Content,
ProfileHeader,
ProfileInfo,
ProfileDetail,
Label,
Value

} from "../../styles/SettingsProfileStyles";
const ProfileSection= () => {

const studentProfile={
name:'Johnny Doe',
age:17,
grade:'11th',
school:'Does High School',
email:'johnny@gmail.com'

}


  return (
    <ProfileContainer>
<SidebarContainer>
<Sidebar/>

</SidebarContainer>
<Content>
<ProfileHeader>Profile</ProfileHeader>
<ProfileInfo>
  <ProfileDetail>
    <Label>Name:</Label>
    <Value>{studentProfile.name}</Value>
  </ProfileDetail>
  <ProfileDetail>
    <Label>Age:</Label>
    <Value>{studentProfile.age}</Value>
  </ProfileDetail>
  <ProfileDetail>
    <Label>Grade:</Label>
    <Value>{studentProfile.grade}</Value>
  </ProfileDetail>
  <ProfileDetail>
    <Label>School:</Label>
    <Value>{studentProfile.school}</Value>
  </ProfileDetail>
  <ProfileDetail>
    <Label>Email:</Label>
    <Value>{studentProfile.email}</Value>
  </ProfileDetail>





</ProfileInfo>

</Content>


    </ProfileContainer>
  )
};

export default ProfileSection;
