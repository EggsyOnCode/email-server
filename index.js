const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());

//init the nodemailer transport obj


app.post("/sendEmail", async (req, res) => {
  try {
    const sender = req.body.from;
    const receiver = req.body.to;
    const sub = req.body.subject;
    const content = req.body.email;

    console.log(sender, receiver, sub, content);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: sender,
        pass: req.body.appkey,
      },
    });

    const info = await transporter.sendMail({
      from: sender,
      to: receiver,
      subject: sub,
      text: content,
    });

    res
      .status(200)
      .json({ message: `${info.messageId} Email sent successfully!` });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email could not be sent" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
