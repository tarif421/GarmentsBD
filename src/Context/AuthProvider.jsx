import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    registerUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
