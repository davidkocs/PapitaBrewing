import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
New contact form submission from Papita Brewing website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from the Papita Brewing website contact form.
    `.trim();

    await mailService.send({
      to: 'david.kocs@papitabrewing.com',
      from: 'noreply@papitabrewing.com', // This should be a verified sender in SendGrid
      subject: `Contact Form: Message from ${formData.name}`,
      text: emailContent,
      replyTo: formData.email
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}