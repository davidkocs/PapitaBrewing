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

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #2563eb;">New Contact Form Submission</h2>
    <p>You have received a new message from the Papita Brewing website:</p>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px;">
        ${formData.message.replace(/\n/g, '<br>')}
      </div>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
    <p style="font-size: 12px; color: #6b7280;">
      This message was sent from the Papita Brewing website contact form.
    </p>
  </div>
</body>
</html>
    `.trim();

    const emailData = {
      to: 'david.kocs@papitabrewing.com',
      from: 'david.kocs@papitabrewing.com',
      subject: `Contact Form: Message from ${formData.name}`,
      text: emailContent,
      html: htmlContent,
      replyTo: formData.email
    };

    console.log('Sending email with data:', {
      to: emailData.to,
      from: emailData.from,
      subject: emailData.subject,
      replyTo: emailData.replyTo
    });

    const response = await mailService.send(emailData);
    console.log('SendGrid response:', response);

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    if (error && typeof error === 'object' && 'response' in error) {
      const sendGridError = error as any;
      console.error('SendGrid error details:', JSON.stringify(sendGridError.response?.body, null, 2));
      console.error('SendGrid response status:', sendGridError.response?.status);
      console.error('SendGrid response headers:', sendGridError.response?.headers);
    }
    return false;
  }
}