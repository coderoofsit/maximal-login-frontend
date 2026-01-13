import React, { useState } from "react";
import { API_URL } from "../apis/apiurl";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import LoginLayout,{Input} from "../components/loginLayout";

const ResetPassword = () => {
  const { setPopupMessage } = useAppContext();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/graphql`,
        {
          query: `
            mutation ForgotPassword($email: String!) {
              forgotPassword(email: $email) {
                success
                message
              }
            }
          `,
          variables: { email },
        },
        { headers: { "Content-Type": "application/json" } }
      );
      const { success, message } = response.data.data.forgotPassword;
      setPopupMessage(success ? "Reset link sent to the email." : message);
      setEmail("");
    } catch (error) {
      setPopupMessage("Something went wrong.");
    }
  };

  return (
    <LoginLayout
      onSubmit={handleSubmit}
      title="Reset Password"
      actionText="Submit"
      links={{ register: "/register" }}
    >
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </LoginLayout>
  );
};

export default ResetPassword;
