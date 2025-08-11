// pages/api/enquiry.js
import { db } from "@/config/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, phone, course, message } = req.body;

    if (!name || !phone || !course) {
      return res.status(400).json({ success: false, message: "Please fill in all required fields." });
    }

    console.log("📨 Enquiry Received:", { name, phone, course, message });

    const [result] = await db.execute(
      `INSERT INTO enquiries (name, phone, course, message) VALUES (?, ?, ?, ?)`,
      [name, phone, course, message]
    );

    console.log("✅ Enquiry Saved. Row ID:", result.insertId);

    return res.status(200).json({ success: true, message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("❌ Enquiry Submission Error:", error);
    return res.status(500).json({ success: false, message: "Submission failed. Please try again." });
  }
}
