import React from 'react';
import {Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
 
  
  LoginButton,
  GuestButton,
  HomeContainer
  ,SchoolInfo
  ,SchoolImage,
  Title
  ,LoremTextContainer,
  AdminRegisterLink} from '../styles/styles';

import { LoremIpsum } from "lorem-ipsum";

import bg from '../assets/bg.png';
import bg1 from '../assets/bg1.png';
import {Link,useNavigate} from 'react-router-dom';

const lorem=new LoremIpsum();


const Home = () => {
  const navigate=useNavigate();
  // const LoremText=lorem.generateParagraph(1);
  const handleLoginClick=()=>
  {
    navigate('/choose-user');

  };
  return (
    <div>
      <Navbar>
        <Logo src={bg1} alt="logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          {/* <LoremTextContainer>
            <p>{LoremText}</p>
          </LoremTextContainer> */}
          <AdminRegisterLink>Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg} alt='Pupils'/>
      </HomeContainer>
    </div>
  );
}

export default Home
