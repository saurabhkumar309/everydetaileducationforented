// pages/api/contact.js
import { db } from "@/config/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validate
    if (!firstName || !lastName || !email || !phone || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Insert
    const [result] = await db.execute(
      `INSERT INTO contact (firstName, lastName, email, phone, message)
       VALUES (?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone, message]
    );

    console.log("✅ Row inserted, ID:", result.insertId);

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ DB Insert Error:", err);
    return res.status(500).json({
      success: false,
      message: "Submission failed. Please try again later.",
    });
  }
}
