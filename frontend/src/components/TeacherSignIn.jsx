import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";

import React, { useState } from "react";

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleSignIn = () => {
    console.log("Teacher Sign In", { email, password });
  };

  return (
    <TeacherSignInContainer>
      <h2>Teacher SignIn</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputField
          type="password"
          placeholder="Passsword"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          required
        />
        <SubmitButton
          type="button"
          onClick={handleSignIn}
          to="/teacher/dashboard"
        >
          Sign In
        </SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
