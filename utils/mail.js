const nodemailer = require('nodemailer');

const host=process.env.host_smtp;
const service=process.env.service_smtp;
const port=process.env.port_smtp;
const user=process.env.user_smtp;
const pass=process.env.user_pass;
const to=process.env.user_to;


const transporter = nodemailer.createTransport({
    service,
    host,
    port,
    auth: {
      user,
      pass
    }
  });

  let sendEmail=(from,subject,text)=>{

    var mailOptions = {
        from,
        to,
        subject,
        text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent to ${to}`);
        }
      });

};

module.exports={
  sendEmail
}