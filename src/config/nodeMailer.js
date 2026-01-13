const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const cors = require('cors');

admin.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's origin
}));

// Configure Nodemailer with your SMTP credentials
const transporter = nodemailer.createTransport({
//   service: "gmail", // Replace with your SMTP provider
//   auth: {
//     user: functions.config().email.user,
//     pass: functions.config().email.pass,
//   },
  host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'carley.huels77@ethereal.email',
        pass: 'Q3RrXhXhDFrxjh27XC'
    }
});

// Define the email-sending function
exports.sendAccountApprovalEmail = functions.https.onCall(async (data, context) => {
  // Extract user details from data
  const { email, displayName, uid } = data;

  const approvalUrl = `https://your-approval-page.com/approve?uid=${uid}`;

  // Define email options (string interpolation)
  const mailOptions = {
    from: email,
    to: "pranjalsinghsengar94@gmail.com", // Replace with actual recipient
    subject: "New Account Awaiting Approval",
    html: `
      <p>Hello,</p>
      <p>A new account has been created and is awaiting your approval.</p>
      <p>User: <strong>${displayName}</strong></p>
      <p>Please click the button below to approve the account:</p>
      <a href="${approvalUrl}" style="display:inline-block;padding:10px 15px;background-color:#28a745;color:white;text-decoration:none;border-radius:5px;">
        Approve Account
      </a>
      <p>Thank you!</p>
    `,
  };

  // Send the email with error handling and logging
  try {
    await transporter.sendMail(mailOptions);
    console.log("Account approval email sent to:", email);
    return { message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new functions.https.HttpsError("internal", "Unable to send email");
  }
});