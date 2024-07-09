import { createTransport } from 'nodemailer';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASS) {
  console.error('Required environment variables are missing.');
  process.exit(1); // Exit the application
}

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify(async (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const body = JSON.parse(event.body);

  const errors = validationResult(body);
  if (!errors.isEmpty()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ code: 400, status: 'Bad Request', errors: errors.array() }),
    };
  }

  try {
    const name = body.name || 'No name provided';
    const email = body.email;
    const phone = body.phone;
    const message = body.message;

    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: 'Contact Form Submission - Portfolio',
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: 'Message Sent' }),
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
}

export default handler;