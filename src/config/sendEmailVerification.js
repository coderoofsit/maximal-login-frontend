import { sendEmailVerification } from "firebase/auth";

export const sendCustomVerificationEmail = (user) => {
  const actionCodeSettings = {
    url: "https://your-app-domain.com/verify-email?uid=" + user.uid,
    handleCodeInApp: true, // Set to true if you want to handle it in the app
  };

  sendEmailVerification(user, actionCodeSettings)
    .then(() => {
      console.log("Custom verification email sent!");
    })
    .catch((error) => {
      console.error("Error sending custom verification email:", error);
    });
};
