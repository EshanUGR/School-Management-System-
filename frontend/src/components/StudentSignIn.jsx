import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/StudentSignInStyles";

import React, { useState } from "react";

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleSignIn = () => {
    console.log("Student Sign In", { email, password });
  };

  return (
    <StudentSignInContainer>
      <h2>Student SignIn</h2>
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
          to="/student/dashboard"
        >
          Sign In
        </SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
