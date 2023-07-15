const nodeMailer=require("nodemailer");


const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'jacinthe.rath@ethereal.email',
        pass: 'Pc11sHTVbwXPs4mfyA'
    },
  });

 module.exports=transporter;