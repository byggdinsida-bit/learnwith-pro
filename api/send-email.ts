import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Hantera preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Endast POST-requests tillåts
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Kontrollera att Resend API-nyckel finns
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY saknas i miljövariabler");
    return res.status(500).json({ error: "Serverkonfiguration saknas" });
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validering
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: "Alla fält är obligatoriska" });
    }

    // Ytterligare validering
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ error: "Ogiltig e-postadress" });
    }

    if (message.length < 10) {
      return res.status(400).json({ error: "Meddelandet är för kort" });
    }

    // Din e-postadress där meddelanden ska skickas
    const recipientEmail = process.env.CONTACT_EMAIL || "studypro.uf@email.com";

    // Skicka e-post via Resend
    const { data, error } = await resend.emails.send({
      from: "Kontaktformulär <onboarding@resend.dev>", // Du behöver verifiera din domän i Resend
      to: recipientEmail,
      replyTo: email,
      subject: `Nytt meddelande: ${subject}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Från:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <hr>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
Nytt meddelande från kontaktformuläret

Från: ${firstName} ${lastName}
E-post: ${email}
Ämne: ${subject}

Meddelande:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Kunde inte skicka e-post" });
    }

    return res.status(200).json({ 
      success: true, 
      message: "Meddelande skickat!", 
      id: data?.id 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Ett fel uppstod vid skickande av meddelande" });
  }
}

