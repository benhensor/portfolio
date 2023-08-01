import express, { Router, json } from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

const router = Router();
dotenv.config();




const PORT = process.env.PORT || 5000;

// Server used to send emails
const app = express();
app.use(cors());
app.use(json());
app.use('/', router);
console.log(process.env.EMAIL_ADDRESS)
console.log(process.env.EMAIL_PASS)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/api/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Contact Form Submission - Portfolio',
    html:  `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`)
});