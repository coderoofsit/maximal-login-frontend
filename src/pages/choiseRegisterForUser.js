import React from "react";
import { Link } from "react-router-dom";
import LoginLayout, { LoginButtons } from "../components/loginLayout";

const ChoiseRegisterForUser = () => {
  return (
    <LoginLayout title="Select User">
      <div className="space-y-6">
        <div className="space-y-3">
          <LoginButtons to="/register/?role=client" actionText="Client" />
          <LoginButtons to="/register/?role=admin" actionText="Administrator" />
          <LoginButtons
            to="/register/?role=management"
            actionText="Management"
          />
          <LoginButtons
            to="/register/?role=security"
            actionText="Security Officer"
          />
        </div>
        <div className="text-white">
          <Link to="/">
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </LoginLayout>
  );
};

export default ChoiseRegisterForUser;
