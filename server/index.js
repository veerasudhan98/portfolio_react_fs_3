const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Import and configure dotenv

const app = express();

// Constants
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "local",
  auth: {
    user: process.env.ADMIN_EMAIL, // Your email address
    pass: process.env.ADMIN_PASS, // Your email password
  },
});

// Endpoint for handling form submissions
app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create email message
  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // Sender email address
    to: email, // Recipient email address
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
