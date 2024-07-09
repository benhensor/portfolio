const { createTransport } = require('nodemailer');

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

function validateInput(body) {
  const errors = [];
  if (!body.name) errors.push('Name is required');
  if (!body.email) errors.push('Email is required');
  if (!body.message) errors.push('Message is required');
  // Add more validations as needed
  return errors;
}

exports.handler = async function(event, context) {
  // Check for environment variables inside the handler
  if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASS) {
    console.error('Required environment variables are missing.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error.' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body' }),
    };
  }

  const errors = validateInput(body);
  if (errors.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ code: 400, status: 'Bad Request', errors }),
    };
  }

  try {
    const name = body.name || 'No name provided';
    const email = body.email;
    const phone = body.phone || 'No phone provided';
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
    if (error.code === 'EAUTH') {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email authentication failed.' }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
}