import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['maxwellchan1@gmail.com'], // In production this would be the user's email
        subject: `New Contact from ${name} at ${company}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(400).json({ message: error.message });
      }

      return res.status(200).json({ success: true, data });
    } catch (err: any) {
      console.error("Contact form error:", err);
      // If API key is missing, mock success for dev/demo purposes but log error
      if (!process.env.RESEND_API_KEY) {
        console.log("No RESEND_API_KEY found, simulating success");
        return res.status(200).json({ success: true, message: "Simulated success (no API key)" });
      }
      return res.status(500).json({ message: "Failed to send email" });
    }
  });

  return httpServer;
}
