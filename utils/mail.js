const nodemailer = require('nodemailer');

const host=process.env.host_smtp || 'smtpout.secureserver.net';
const service=process.env.service_smtp || 'goddady';
const port=process.env.port_smtp || '465';
const user=process.env.user_smtp || 'johan.calderon@biobayter.com';
const pass=process.env.user_smtp || 'Johan80739565.';
const to=process.env.user_smtp || 'nahhoj@hotmail.com';


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