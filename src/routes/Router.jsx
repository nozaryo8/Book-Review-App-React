import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export const Router = () => {
//   const auth = useSelector((state) => state.auth.isSignIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        
        {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};
