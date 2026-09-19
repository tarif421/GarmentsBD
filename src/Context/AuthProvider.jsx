import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  // register user function
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // authInfo object to provide the functions and state to the context
  const authInfo = {
    registerUser,
    loginUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
