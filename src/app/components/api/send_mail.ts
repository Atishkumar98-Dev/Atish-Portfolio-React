import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "atish98.dev@gmail.com",
      pass: "process.env.EMAIL_PASS", // App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "atish98.dev@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}