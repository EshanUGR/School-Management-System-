import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminSignInStyles";

import React, { useState } from "react";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleSignIn = () => {
    console.log("Admin Sign In", { email, password });
  };

  return (
    <AdminSignInContainer>
      <h2>Admin SignIn</h2>
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
        <SubmitButton type="button" onClick={handleSignIn} to="/admin/dashboard">
         Sign In
        </SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
