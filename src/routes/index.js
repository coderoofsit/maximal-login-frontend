import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ResetPassword from "../pages/resetPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChoiseRegisterForUser from "../pages/choiseRegisterForUser";
import VerifyEmail from "../pages/verifyUser";

const Routers = () => {

  return (
    <Routes>
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/' element={<Login />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
      <Route path='/register' element={<Register />} />
      <Route path='/role' element={<ChoiseRegisterForUser />} />
      <Route path='/verifyuser/:userId' element={<VerifyEmail />} />
    </Routes>
  );
};

export default Routers;
