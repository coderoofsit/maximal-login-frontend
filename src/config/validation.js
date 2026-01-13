const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: "rollan.g.semenduyev@gmail.com",
    pass: "duzd yoaa ycnp ppdc"
  }
});

exports.sendDetailedRegistrationEmail = functions.https.onCall(async (data, context) => {
  try {
    const { email, firstName, lastName, company, uid, timestamp } = data;

    const mailOptions = {
      from:"rollan.g.semenduyev@gmail.com",
      to: "pranjalsinghsengar94@gmail.com",
      subject: 'Welcome to Our Platform',
      html: `
        <h2>Welcome to Our Platform, ${firstName}!</h2>
        <p>Thank you for registering as an admin user. Here are your registration details:</p>
        <ul>
          <li>Name: ${firstName} ${lastName}</li>
          <li>Company: ${company}</li>
          <li>Email: ${email}</li>
          <li>Registration Time: ${new Date(timestamp).toLocaleString()}</li>
        </ul>
        <p>Please verify your email address by clicking the verification link sent in a separate email.</p>
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return { success: true, message: 'Registration email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError('internal', 'Failed to send registration email');
  }
});